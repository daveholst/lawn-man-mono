import fastify from 'fastify'
import aws from 'aws-sdk'

const dbTableName: string = process.env.DB_NAME

export const app = fastify()
app.get('/', (request, reply) => {
    request.log.info(request.body)
    reply.send({ hello: 'world' })
})

app.post('/', async (request, reply) => {
    request.log.info(request.body)
    console.log(request.body)
    console.log('table name::', dbTableName)
    // write to db?
    try {
        const db = new aws.DynamoDB.DocumentClient()
        const dbData = await db
            .put({
                TableName: dbTableName,
                Item: request.body,
            })
            .promise()
        console.log(dbData)
        reply.send({
            message: 'succesfully posted to db',
            data: request.body,
        })
    } catch (error) {
        request.log.error(error)
        console.error(error)
        reply.code(500).send(error)
    }
})

if (require.main === module) {
    // called directly i.e. "node app"
    app.listen(3000, (err) => {
        if (err) console.error(err)
        console.log('server listening on 3000')
    })
} else {
    // required as a module => executed on aws lambda
}
