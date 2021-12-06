import awsLambdaFastify from 'aws-lambda-fastify'
import { Handler } from 'aws-lambda'

import { app } from './app'

const proxy = awsLambdaFastify(app)
// or
// const proxy = awsLambdaFastify(app, { binaryMimeTypes: ['application/octet-stream'], serializeLambdaArguments: false /* default is true */ })

// exports.handler = proxy
// or
// exports.handler = (event, context, callback) => proxy(event, context, callback)
// or
// exports.handler = (event, context) => proxy(event, context)
// or
export const handler: Handler = async (event, context) => proxy(event, context)
