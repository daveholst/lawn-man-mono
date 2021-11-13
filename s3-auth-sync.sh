#!/usr/bin/env bash

# super hacky script...
# building files
echo 'Build files'
nx run auth-site:build
# sync to s3
echo 'Sync files to S3 Bucket'
aws s3 sync ./apps/auth-site/dist/ s3://auth.lawnman.club --acl public-read --profile pulumi-admin