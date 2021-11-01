// write basice gateway in here.
// test with fert basic response then up

// Import the [pulumi/aws](https://pulumi.io/reference/pkg/nodejs/@pulumi/aws/index.html) package
import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'
import { getDomainAndSubdomain } from './utils/get-domain'

// Create a public HTTP endpoint (using AWS APIGateway)
const endpoint = new awsx.apigateway.API('fertiliser-api', {
    routes: [
        {
            path: '/',
            method: 'GET',
            eventHandler: (req, ctx, cb) => {
                cb(undefined, {
                    statusCode: 200,
                    body: 'testing 123...',
                })
            },
        },
    ],
})

const domainParts = getDomainAndSubdomain('fert.lawnman.club')
const tenMinutes = 60 * 10

// Get the hosted zone by domain name
const hostedZoneId = aws.route53
    .getZone({ name: domainParts.parentDomain }, { async: true })
    .then((zone) => zone.id)

// Per AWS, ACM certificate must be in the us-east-1 region.
const eastRegion = new aws.Provider('east', {
    profile: aws.config.profile,
    region: 'us-east-1',
})
//  Create the SSL Certificate
const certificate = new aws.acm.Certificate(
    'certificate',
    {
        domainName: 'fert.lawnman.club',
        validationMethod: 'DNS',
    },
    { provider: eastRegion }
)
// Create the Certificate Validation Records in the DNS
const certificateValidationDomain = new aws.route53.Record(
    'fert.lawnman.club-validation',
    {
        name: certificate.domainValidationOptions[0].resourceRecordName,
        zoneId: hostedZoneId,
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
    },
    { provider: eastRegion }
)
// Configure an edge-optimized domain for our API Gateway. This will configure a Cloudfront CDN
// distribution behind the scenes and serve our API Gateway at a custom domain name over SSL.
const apiGatewayDomain = new aws.apigateway.DomainName('apiGatewayCDN', {
    certificateArn: certificateValidation.certificateArn,
    domainName: 'fert.lawnman.club',
})

const apiDomainMapping = new aws.apigateway.BasePathMapping(
    'apiDomainMapping',
    {
        restApi: endpoint.restAPI,
        stageName: endpoint.stage.stageName,
        domainName: apiGatewayDomain.id,
    }
)

//  Create DNS record for apiGateway
const apiDnsRecord = new aws.route53.Record(
    'apiDnsRecord',
    {
        name: apiGatewayDomain.domainName,
        type: 'A',
        zoneId: hostedZoneId,
        aliases: [
            {
                evaluateTargetHealth: true,
                name: apiGatewayDomain.cloudfrontDomainName,
                zoneId: apiGatewayDomain.cloudfrontZoneId,
            },
        ],
    },
    { dependsOn: certificateValidation }
)

exports.url = endpoint.url
