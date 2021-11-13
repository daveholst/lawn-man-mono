import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'
import * as mime from 'mime'

import { getDomainAndSubdomain } from '../fertiliser-api/src/utils/get-domain'

const domain = 'auth.lawnman.club'
const domainParts = getDomainAndSubdomain(domain)
const tenMinutes = 60 * 10

// Get the hosted zone by domain name
const selectedZone = pulumi.output(
    aws.route53.getZone({ name: domainParts.parentDomain }, { async: true })
)

//  Create the SSL Certificate
const certificate = new aws.acm.Certificate('auth-lawnman-certificate', {
    domainName: domain,
    validationMethod: 'DNS',
})
// Create the Certificate Validation Records in the DNS
const certificateValidationDomain = new aws.route53.Record(
    'auth-lawnman-validation-record',
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
    'auth-lawnman-certificate-validation',
    {
        certificateArn: certificate.arn,
        validationRecordFqdns: [certificateValidationDomain.fqdn],
    }
)

// Create an AWS resource (S3 Bucket)
const siteBucket = new aws.s3.Bucket('auth-lawnman-bucket', {
    bucket: domain,
    acl: 'public-read',
    website: {
        indexDocument: 'index.html',
    },
})

//  Create DNS record for bucket
const staticDnsRecord = new aws.route53.Record(
    'apiDnsRecord',
    {
        // name: apiGatewayDomainName.domainName,
        name: 'auth.lawnman.club',
        type: 'A',
        zoneId: selectedZone.zoneId,
        aliases: [
            {
                evaluateTargetHealth: true,
                name: siteBucket.websiteDomain,
                zoneId: siteBucket.hostedZoneId, //maybe just .id ???
            },
        ],
    },
    { dependsOn: [certificateValidation, siteBucket] }
)

// upload files to the bucket --> moved to a build script

// Export the name of the bucket
export const bucketDomain = siteBucket.bucketDomainName
export const dnsRecord = staticDnsRecord.name
