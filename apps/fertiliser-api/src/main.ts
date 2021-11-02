// write basice gateway in here.
// test with fert basic response then up

// Import the [pulumi/aws](https://pulumi.io/reference/pkg/nodejs/@pulumi/aws/index.html) package
import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'
import { getDomainAndSubdomain } from './utils/get-domain'
import { base64decode } from './utils/base-64'

const domain = 'fert.lawnman.club'
const domainParts = getDomainAndSubdomain(domain)
const tenMinutes = 60 * 10

// Create a public HTTP endpoint (using AWS APIGateway)
const endpoint = new awsx.apigateway.API('fertiliser-api', {
    routes: [
        {
            path: '/',
            method: 'GET',
            eventHandler: async (req, res) => {
                return {
                    statusCode: 200,
                    body: 'what did I breaK',
                }
            },
        },
        {
            path: '/',
            method: 'POST',
            eventHandler: async (req, res) => {
                if (!req.body) {
                    return {
                        statusCode: 400,
                        body: 'no data provided :(',
                    }
                }
                const { id, name } = JSON.parse(base64decode(req.body))
                const db = new aws.sdk.DynamoDB.DocumentClient()
                await db
                    .put({
                        TableName: fertiliserTable.name.get(),
                        Item: { id, name },
                    })
                    .promise()
                return {
                    statusCode: 200,
                    message: 'fert saved',
                    body: base64decode(req.body),
                }
            },
        },
    ],
})

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
        domainName: domain,
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
    domainName: domain,
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

// Create Database access
function getdatabaseParams(fertiliserTable: aws.dynamodb.Table) {
    return {
        TableName: fertiliserTable.name.get(),
        ConsistentRead: true,
        ExclusiveStartKet: undefined,
    }
}

exports.url = endpoint.url
