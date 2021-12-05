import fastify from 'fastify'
import aws from 'aws-sdk'

const dbTableName: string | undefined = process.env.DB_NAME

export const app = fastify()
app.get('/', (request, reply) => {
    request.log.info(request.body)
    reply.send({ hello: 'world' })
})
