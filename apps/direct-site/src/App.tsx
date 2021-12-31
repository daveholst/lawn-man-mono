import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth, useAuth } from '@lawn-man-mono/shared-components'
import mqtt from 'mqtt'
// import * as mqtt from 'mqtt/dist/mqtt.min'
// import { Connector } from 'react-mqtt-client'
// MQTTUSR=juicebox
// MQTTPWD=dY*t7LSgGhc%M4
// # public mqtt server ip
// MQTTSERVER=mqtt://128.199.220.209

const App = () => {
    const { user, performLogout } = useAuth()
    const [conState, setConState] = useState('not connected')

    useEffect(() => {
        const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
        const host = 'ws://128.199.220.209:9001/mqtt'
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
        }

        console.log('Connecting mqtt client')
        const client = mqtt.connect(host, options)

        client.on('connect', () => {
            setConState('connected')
        })

        client.on('error', (err) => {
            console.log('Connection error: ', err)
            client.end()
        })

        client.on('reconnect', () => {
            console.log('Reconnecting...')
        })
    }, [])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <h1>
                            Direct Control Site MQTT: {`Status: ${conState}`}
                        </h1>
                        <p>Hellooo {user?.idToken.payload.email} </p>
                        <button onClick={performLogout}>Log Out!!!!!!!!</button>
                    </RequireAuth>
                }
            />
        </Routes>
    )
}

export default App
