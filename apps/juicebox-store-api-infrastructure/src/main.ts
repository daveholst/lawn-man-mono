import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as path from 'path'

// This is the path to the other project relative to the CWD

import { getDomainAndSubdomain } from '@lawn-man-mono/pulumi-utils'

import { ApiGatewayLambdaProxy } from '@wanews/pulumi-apigateway-lambda-proxy'

const projectRoot = '../juicebox-store-api'

const name = 'juicebox-store-api'
const domain = 'juicebox-store-api.lawnman.club'
const domainParts = getDomainAndSubdomain(domain)
const tenMinutes = 60 * 10

// Get the hosted zone by domain name
const selectedZone = pulumi.output(
    aws.route53.getZone({ name: domainParts.parentDomain }, { async: true })
)

//  Create the SSL Certificate
const certificate = new aws.acm.Certificate(
    `${name}-certificate`,
    {
        domainName: domain,
        validationMethod: 'DNS',
    }
    // { provider: eastRegion }
)
// Create the Certificate Validation Records in the DNS
const certificateValidationDomain = new aws.route53.Record(
    `${name}-validation`,
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
    `${name}-certificate-validation`,
    {
        certificateArn: certificate.arn,
        validationRecordFqdns: [certificateValidationDomain.fqdn],
    }
    // { provider: eastRegion }
)

// Create a Database infrastructure
const juiceboxTable = new aws.dynamodb.Table('juicebox-table', {
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
const role = new aws.iam.Role(`${name}-lambda-policy`, {
    assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
        Service: 'lambda.amazonaws.com',
    }),
})

const policy = new aws.iam.RolePolicy(`${name}-lambda-policy`, {
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
                Resource: juiceboxTable.arn,
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
const apiProxy = new ApiGatewayLambdaProxy(`${name}-lambda-proxy`, {
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
            path.resolve(projectRoot, 'index.zip')
        ),
        runtime: 'nodejs14.x',
        handler: 'index.handler',
        memorySize: 256,
        environment: {
            variables: {
                DB_NAME: juiceboxTable.name,
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

// had to add this conditional for typescript Object is possibly 'undefined' error. is there a better way?
if (apiProxy.apiGatewayDomainName) {
    const apiDnsRecord = new aws.route53.Record(
        `${name}-dns-record`,
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
                    zoneId:
                        apiProxy.apiGatewayDomainName.domainNameConfiguration.apply(
                            (domainNameConfiguration) =>
                                domainNameConfiguration.hostedZoneId
                        ) || 'none',
                },
            ],
        },
        { dependsOn: certificateValidation }
    )
}
//  Create DNS record for apiGateway

function getTags(name: string) {
    // Use whatever logic you like to construct your tags
    return {
        Name: name,
        Product: 'fertilser',
        /* ... */
    }
}

exports.url = apiProxy.invokeUrl
