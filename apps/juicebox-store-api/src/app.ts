import fastify from 'fastify'
import aws from 'aws-sdk'

const dbTableName: string | undefined = process.env.DB_NAME

if (!dbTableName) {
    process.exit(1)
}

import { Table, Entity } from 'dynamodb-onetable'
import DynamoDB from 'aws-sdk/clients/dynamodb'
import Schema from './models/schema'
import {
    OpensprinklerType,
    // UserType,
    UserDataDTO,
    JuiceboxType,
} from './models/Types'
import { check } from 'prettier'

const client = new DynamoDB.DocumentClient({
    params: { table: dbTableName },
})

const table = new Table({
    name: dbTableName,
    client: client,
    // crypto: Crypto,
    uuid: 'ulid',
    logger: true,
    timestamps: true,
    isoDates: true,
    schema: Schema,
})

const User = table.getModel<UserType>('User')
const Opensprinkler = table.getModel<OpensprinklerType>('Opensprinkler')
const Juicebox = table.getModel<JuiceboxType>('Juicebox')
type UserType = Entity<typeof Schema.models.User>
// bootstrap table if doesnt exist?

export const app = fastify()
app.get('/', (request, reply) => {
    request.log.info(request.body)
    reply.send({ hello: 'world' })
})

app.post<{ Body: UserDataDTO }>('/create-account', async (request, reply) => {
    if (await !table.exists()) {
        await table.createTable()
    }
    // app.post('/create-account', async (request, reply) => {
    try {
        console.log(request.body)
        const {
            user: rawUser,
            opensprinkler: rawOpensprinkler,
            juicebox: rawJuicebox,
        } = request.body
        // check email isnt in use
        const checkUser = await User.get(
            { email: rawUser.email },
            { index: 'gs1', follow: true }
        )
        console.log(checkUser)

        if (checkUser) {
            reply
                .code(500)
                .send({ message: 'email in use', existingUser: checkUser })
        }

        const user = await User.create(rawUser)
        table.setContext({ ownerId: user.id })
        const opensprinkler = await Opensprinkler.create(rawOpensprinkler)
        const juicebox = await Juicebox.create(rawJuicebox)

        reply.send({ user, opensprinkler, juicebox })
        // reply.send(user)
    } catch (error) {
        reply.code(500).send(error)
        console.error(error)
    }
})
