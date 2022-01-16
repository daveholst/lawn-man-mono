import AWS from 'aws-sdk'
import mqtt from 'mqtt'

import { config } from '../config'
import { environment } from './environments/environment.prod'

AWS.config.update({
    region: config.region,
    accessKeyId: config.mqttBridgeUserId,
    secretAccessKey: config.mqttBridgeUserSecret,
})

const clientId = `mqtt_bridge_${Math.random().toString(16).slice(3)}`

const client = mqtt.connect(environment.mqttServer, {
    clientId,
    clean: true,
    username: config.mqttUsername,
    password: config.mqttPassword,
    // connectTimeout: 5,
    reconnectPeriod: 1000,
})

console.log('STARTED SERICE ON :: ', environment.mqttServer)

// SNS message publisher
async function publishMessage(msg: unknown) {
    try {
        return new AWS.SNS({ apiVersion: '2010-03-31' })
            .publish({
                Message: JSON.stringify(msg),
                TopicArn: config.snsTopicArn,
            })
            .promise()
    } catch (err) {
        console.error(err)
    }
}

// Connect MQTT client

client.on('connect', () => {
    client.subscribe('juicebox1/#', (err) => {
        if (!err) {
            console.log('MQTT Bridge Connected')
            client.publish('juicebox1', 'Bridge Online')
        } else {
            console.error('Failed to connect :: ', err)
        }
    })
})

// Watch MQTT for messages and Publish message to SNS topic
client.on('message', async (topic, message) => {
    if (!topic.includes('debug')) {
        const msg = {
            topic: topic,
            payload: message.toString(),
        }
        const msgInfo = await publishMessage(JSON.stringify(msg, null, 4))
        console.log('Message published to SNS topic :: ', msgInfo?.MessageId)
        console.log(msg)
    }
})

// Error Handling
client.on('error', (err) => {
    console.error(err)
})

client.on('reconnect', () => {
    console.log('reconnecting!')
})
