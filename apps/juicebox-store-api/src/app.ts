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
    // OpensprinklerType,
    // UserType,
    UserDataDTO,
    // JuiceboxType,
} from './models/Types'

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
// const Opensprinkler = table.getModel<OpensprinklerType>('Opensprinkler')
// const Juicebox = table.getModel<JuiceboxType>('Juicebox')
type UserType = Entity<typeof Schema.models.User>

export const app = fastify()
app.get('/', (request, reply) => {
    request.log.info(request.body)
    reply.send({ hello: 'world' })
})

// app.post<{ Body: UserDataDTO }>('/create-account', async (request, reply) => {
app.post('/create-account', async (request, reply) => {
    try {
        // console.log(request.body)
        // const {
        //     user: rawUser,
        //     // opensprinkler: rawOpensprinkler,
        //     // juicebox: rawJuicebox,
        // } = JSON.parse(JSON.stringify(request)) as UserDataDTO
        // console.log(request.body.user)
        // const testUser: UserDataDTO = {
        //     user: {
        //         cognitoId: 'sdfsdf',
        //         email: 'test@test.com.au',
        //         firstName: 'Dave',
        //         lastName: 'Holst',
        //         username: 'daveholst',
        //         role: 'admin',
        //     },
        // }
        const testUser = {
            user: {
                cognitoId: 'sdfsdf',
                email: 'test@test.com.au',
                firstName: 'Dave',
                lastName: 'Holst',
                username: 'daveholst',
                role: 'admin',
            },
            opensprinkler: {
                uri: 'ererre',
                apikery: 'easdsaddsarerre',
            },
            juicebox: {
                deviceName: 'sdfadsf',
            },
        }

        // console.log(rawUser, rawOpensprinkler, rawJuicebox)
        const user = await User.create({
            cognitoId: 'sdfsdf',
            email: 'test@test.com.au',
            firstName: 'Dave',
            lastName: 'Holst',
            username: 'daveholst',
            // role: 'admin',
        })
        // table.setContext({ ownerId: user.id })
        // const opensprinkler = await Opensprinkler.create(testUser.opensprinkler)
        // const juicebox = await Juicebox.create(testUser.juicebox)

        // reply.send({ user, opensprinkler, juicebox })
        reply.send(user)
    } catch (error) {
        reply.code(500).send(error)
        console.error(error)
    }
})
