import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as path from 'path'
import * as mime from 'mime'

import {
    crawlDirectory,
    getDomainAndSubdomain,
} from '@lawn-man-mono/pulumi-utils'

// This is the path to the other project relative to the CWD
const projectRoot = '../fert-site/dist'
// maybe move over to the pulumi config> idk? https://github.com/pulumi/examples/blob/master/aws-ts-static-website/index.ts
// const webContentsRootPath = path.join(
//     process.cwd(),
//     config.pathToWebsiteContents
// )

const projectName = 'fert-site'
const domain = 'fert.lawnman.club'
const domainParts = getDomainAndSubdomain(domain)
const tenMinutes = 60 * 10

// Per AWS, ACM certificate must be in the us-east-1 region.
const eastRegion = new aws.Provider('east', {
    profile: aws.config.profile,
    region: 'us-east-1',
})

// Get the hosted zone by domain name
const selectedZone = pulumi.output(
    aws.route53.getZone({ name: domainParts.parentDomain }, { async: true })
)

//  Create the SSL Certificate
const certificate = new aws.acm.Certificate(
    `${projectName}-lawnman-certificate`,
    {
        domainName: domain,
        validationMethod: 'DNS',
    },
    { provider: eastRegion }
)
// Create the Certificate Validation Records in the DNS
const certificateValidationDomain = new aws.route53.Record(
    `${projectName}-lawnman-validation-record`,
    {
        name: certificate.domainValidationOptions[0].resourceRecordName,
        zoneId: selectedZone.zoneId,
        type: certificate.domainValidationOptions[0].resourceRecordType,
        records: [certificate.domainValidationOptions[0].resourceRecordValue],
        ttl: tenMinutes,
    }
)

// Wait for Certificate to be validated
const certificateValidation = new aws.acm.CertificateValidation(
    `${projectName}-lawnman-certificate-validation`,
    {
        certificateArn: certificate.arn,
        validationRecordFqdns: [certificateValidationDomain.fqdn],
    },
    { provider: eastRegion }
)

// Create an AWS resource (S3 Bucket)
const siteBucket = new aws.s3.Bucket(`${projectName}-lawnman-bucket`, {
    bucket: domain,
    acl: 'public-read',
    // source: new pulumi.asset.FileAsset(), // use FileAsset to point to a file

    website: {
        indexDocument: 'index.html',
    },
})

// Sync the contents of the source directory with the S3 bucket, which will in-turn show up on the CDN.
const webContentsRootPath = path.join(process.cwd(), projectRoot)

console.log('Syncing contents from local disk at', webContentsRootPath)
crawlDirectory(webContentsRootPath, (filePath: string) => {
    const relativeFilePath = filePath.replace(webContentsRootPath + '/', '')
    const contentFile = new aws.s3.BucketObject(
        relativeFilePath,
        {
            key: relativeFilePath,

            acl: 'public-read',
            bucket: siteBucket,
            contentType: mime.getType(filePath) || undefined,
            source: new pulumi.asset.FileAsset(filePath),
        },
        {
            parent: siteBucket,
        }
    )
})

// distributionArgs configures the CloudFront distribution. Relevant documentation:
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html
// https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
const distributionArgs: aws.cloudfront.DistributionArgs = {
    enabled: true,
    // Alternate aliases the CloudFront distribution can be reached at, in addition to https://xxxx.cloudfront.net.
    // Required if you want to access the distribution via config.targetDomain as well.
    aliases: [domain],

    // We only specify one origin for this distribution, the S3 content bucket.
    origins: [
        {
            originId: siteBucket.arn,
            domainName: siteBucket.websiteEndpoint,
            customOriginConfig: {
                // Amazon S3 doesn't support HTTPS connections when using an S3 bucket configured as a website endpoint.
                // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginProtocolPolicy
                originProtocolPolicy: 'http-only',
                httpPort: 80,
                httpsPort: 443,
                originSslProtocols: ['TLSv1.2'],
            },
        },
    ],

    defaultRootObject: 'index.html',

    // A CloudFront distribution can configure different cache behaviors based on the request path.
    // Here we just specify a single, default cache behavior which is just read-only requests to S3.
    defaultCacheBehavior: {
        targetOriginId: siteBucket.arn,

        viewerProtocolPolicy: 'redirect-to-https',
        allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
        cachedMethods: ['GET', 'HEAD', 'OPTIONS'],

        forwardedValues: {
            cookies: { forward: 'none' },
            queryString: false,
        },

        minTtl: 0,
        defaultTtl: tenMinutes,
        maxTtl: tenMinutes,
    },

    // "All" is the most broad distribution, and also the most expensive.
    // "100" is the least broad, and also the least expensive.
    priceClass: 'PriceClass_100',

    // You can customize error responses. When CloudFront receives an error from the origin (e.g. S3 or some other
    // web service) it can return a different error code, and return the response for a different resource.
    customErrorResponses: [
        { errorCode: 404, responseCode: 404, responsePagePath: '/404.html' },
    ],

    restrictions: {
        geoRestriction: {
            restrictionType: 'none',
        },
    },

    viewerCertificate: {
        acmCertificateArn: certificateValidation.certificateArn, // Per AWS, ACM certificate must be in the us-east-1 region.
        sslSupportMethod: 'sni-only',
    },
}

const cdn = new aws.cloudfront.Distribution(
    `${projectName}-lawnman-cdn`,
    distributionArgs
)
//  Create DNS record for bucket
const staticDnsRecord = new aws.route53.Record(
    `${projectName}-dns-record`,
    {
        // name: apiGatewayDomainName.domainName,
        name: domain,
        type: 'A',
        zoneId: selectedZone.zoneId,
        aliases: [
            {
                evaluateTargetHealth: true,
                // name: siteBucket.websiteDomain,
                name: cdn.domainName,
                // zoneId: siteBucket.hostedZoneId, //maybe just .id ???
                zoneId: cdn.hostedZoneId, //maybe just .id ???
            },
        ],
    },
    { dependsOn: [certificateValidation, siteBucket] }
)

// Export the name of the bucket
export const bucketDomain = siteBucket.bucketDomainName
export const dnsRecord = staticDnsRecord.name
