import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth, useAuth } from '@lawn-man-mono/shared-components'
import mqtt from 'mqtt'
import { caCert } from './ca'
// import * as mqtt from 'mqtt/dist/mqtt.min'
// import { Connector } from 'react-mqtt-client'
// MQTTUSR=juicebox
// MQTTPWD=dY*t7LSgGhc%M4
// # public mqtt server ip
// MQTTSERVER=mqtt://128.199.220.209

const App = () => {
    const { user, performLogout } = useAuth()
    const [conState, setConState] = useState(false)
    const [client, setClient] = useState<null | mqtt.MqttClient>(null)

    const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
    const host = 'wss://mqtt.holstsolutions.com:443/ws/mqtt'
    const options = {
        username: 'juicebox',
        password: 'dY*t7LSgGhc%M4',
        keepalive: 60,
        clientId: clientId,
        protocolId: 'MQTT',
        protocolVersion: 4,
        clean: true,
        reconnectPeriod: 1000,
        connectTimeout: 30 * 1000,
        // ca: caCert,
        // secureProtocol: 'TLSv2_method',
        useSSL: true,
    }

    const mqttConnect = (host: string, mqttOption: mqtt.IClientOptions) => {
        // setConnectStatus('Connecting');
        setClient(mqtt.connect(host, mqttOption))
        client?.on('connect', () => {
            console.log('Connected')
            setConState(true)
        })
    }

    const waterOn = () => {
        if (client) {
            client.publish('juicebox1/water/on', 'on')
        }
    }
    const waterOff = () => {
        client?.publish('juicebox1/water/off', 'off')
    }
    useEffect(() => {
        mqttConnect(host, options)
    }, [])

    useEffect(() => {
        if (client) {
            client.on('connect', () => {
                console.log('Connected')

                setConState(true)
            })

            client.on('error', (err) => {
                console.log('Connection error: ', err)
                client?.end()
            })

            client.on('reconnect', () => {
                console.log('Reconnecting...')
            })
        }
    }, [client])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    client && (
                        <RequireAuth>
                            <h1>
                                Direct Control Site MQTT:{' '}
                                {`Status: ${conState}`}
                            </h1>
                            <p>Hellooo {user?.idToken.payload.email} </p>
                            {/* <button onClick={performLogout}>Log Out!!!!!!!!</button> */}
                            <br />
                            <button onClick={waterOn}>Water On</button>
                            <br />
                            <button onClick={waterOff}>Water Off</button>
                        </RequireAuth>
                    )
                }
            />
        </Routes>
    )
}

export default App
