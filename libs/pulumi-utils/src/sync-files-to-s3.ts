import * as aws from '@pulumi/aws'
import * as pulumi from '@pulumi/pulumi'
import mime from 'mime'
import path from 'path'
import { crawlDirectory } from './crawl-directory'

export class SyncToS3 extends pulumi.ComponentResource {
    constructor(
        name: string,
        args: {
            folder: pulumi.Input<string>
            target: aws.s3.Bucket
            protectDeletedAssets?: boolean
            defaultFileOptions?: Partial<aws.s3.BucketObjectArgs>
            fileOptions?: {
                [filename: string]: Partial<aws.s3.BucketObjectArgs>
            }
        },
        opts?: pulumi.ComponentResourceOptions | undefined,
    ) {
        super('SyncToS3', name, {}, opts)

        pulumi.output(args).apply((syncArgs) => {
            crawlDirectory(syncArgs.folder, (filePath: string) => {
                const relativeFilePath = filePath.replace(
                    syncArgs.folder + '/',
                    '',
                )
                const relativeToCwd = path.relative(process.cwd(), filePath)

                new aws.s3.BucketObject(
                    `${name}-${relativeFilePath}`,
                    {
                        ...(syncArgs.defaultFileOptions || {}),
                        ...(syncArgs.fileOptions
                            ? syncArgs.fileOptions[relativeFilePath]
                            : {}),
                        key: relativeFilePath,
                        bucket: syncArgs.target,
                        contentType:
                            mime.getType(`./${relativeToCwd}`) || undefined,
                        source: new pulumi.asset.FileAsset(
                            `./${relativeToCwd}`,
                        ),
                    },
                    {
                        parent: this,
                        protect: syncArgs.protectDeletedAssets,
                    },
                )
            })
        })
    }
}
