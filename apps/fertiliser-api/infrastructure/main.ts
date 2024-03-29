// write basice gateway in here.
// test with fert basic response then up

// Import the [pulumi/aws](https://pulumi.io/reference/pkg/nodejs/@pulumi/aws/index.html) package
import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import { getDomainAndSubdomain } from '../src/utils/get-domain'
import { ApiGatewayLambdaProxy } from '@wanews/pulumi-apigateway-lambda-proxy'
import path from 'path'

const domain = 'fert-api.lawnman.club'
const domainParts = getDomainAndSubdomain(domain)
const tenMinutes = 60 * 10

// Get the hosted zone by domain name
const selectedZone = pulumi.output(
    aws.route53.getZone({ name: domainParts.parentDomain }, { async: true })
)

//  Create the SSL Certificate
const certificate = new aws.acm.Certificate(
    'certificate',
    {
        domainName: domain,
        validationMethod: 'DNS',
    }
    // { provider: eastRegion }
)
// Create the Certificate Validation Records in the DNS
const certificateValidationDomain = new aws.route53.Record(
    'fert-api.lawnman.club-validation',
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
    'certificateValidation',
    {
        certificateArn: certificate.arn,
        validationRecordFqdns: [certificateValidationDomain.fqdn],
    }
    // { provider: eastRegion }
)

// Create a Database infrastructure
const fertiliserTable = new aws.dynamodb.Table('fertiliser-table', {
    attributes: [
        {
            name: 'id',
            type: 'S',
        },
    ],
    hashKey: 'id',
    billingMode: 'PAY_PER_REQUEST',
})

// lambda policy
const role = new aws.iam.Role('mylambda-role', {
    assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
        Service: 'lambda.amazonaws.com',
    }),
})

const policy = new aws.iam.RolePolicy('mylambda-policy', {
    role,
    policy: pulumi.output({
        Version: '2012-10-17',
        Statement: [
            {
                Action: [
                    'dynamodb:UpdateItem',
                    'dynamodb:PutItem',
                    'dynamodb:GetItem',
                    'dynamodb:DescribeTable',
                ],
                Resource: fertiliserTable.arn,
                Effect: 'Allow',
            },
            {
                Action: ['logs:*', 'cloudwatch:*'],
                Resource: '*',
                Effect: 'Allow',
            },
        ],
    }),
})

// create lambda from code (webpacked?) -> https://www.pulumi.com/registry/packages/aws/api-docs/lambda/function/
const apiProxy = new ApiGatewayLambdaProxy(`fert-api`, {
    executionRole: role,
    hostname: domain,
    apiGatewayCertificateArn: certificateValidation.certificateArn,
    apiGatewayOptions: {
        corsConfiguration: {
            allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
            allowOrigins: ['*'],
            allowHeaders: [
                'Accept',
                'Accept-Encoding',
                'X-Api-Key',
                'Origin',
                'Content-Type',
                'Authorization',
                'Pragma', // otherwise it breaks in Chrome DevTools!
            ],
        },
    },
    getTags,

    lambdaOptions: {
        code: new pulumi.asset.FileArchive(
            path.join(__dirname, '../dist/index.js.zip')
        ), //TODO add path to bundled zip
        runtime: 'nodejs12.x',
        handler: 'index.handler', //TODO does this have to match the entry file in the zip?
        memorySize: 512,
        environment: {
            variables: {
                DB_NAME: fertiliserTable.name,
            },
        },
    },
})
// create a followup route53 record?
//  Create DNS record for apiGateway
// const apiDnsRecord = new aws.route53.Record(
//     'apiDnsRecord',
//     {
//         name: domain,
//         type: 'A',
//         zoneId: selectedZone.zoneId,
//         aliases: [
//             {
//                 evaluateTargetHealth: true,
//                 name: apiProxy.,
//                 zoneId: selectedZone.zoneId,
//             },
//         ],
//     },
//     { dependsOn: certificateValidation }
// )

// Create DB

//  Create DNS record for apiGateway
const apiDnsRecord = new aws.route53.Record(
    'apiDnsRecord',
    {
        // name: apiGatewayDomainName.domainName,
        name: domain,
        type: 'A',
        zoneId: selectedZone.zoneId,
        aliases: [
            {
                evaluateTargetHealth: false,
                // name: apiProxy.apiGatewayHostname.apply((host) => host),
                name: apiProxy.apiGatewayDomainName.domainNameConfiguration.apply(
                    (domainNameConfiguration) =>
                        domainNameConfiguration.targetDomainName
                ),
                zoneId: apiProxy.apiGatewayDomainName.domainNameConfiguration.apply(
                    (domainNameConfiguration) =>
                        domainNameConfiguration.hostedZoneId
                ),
            },
        ],
    }
    // { dependsOn: certificateValidation }
)

function getTags(name: string) {
    // Use whatever logic you like to construct your tags
    return {
        Name: name,
        Product: 'fertilser',
        /* ... */
    }
}

exports.url = apiProxy.invokeUrl
