import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth, useAuth } from '@lawn-man-mono/shared-components'
// import { Connector } from 'react-mqtt-client'
// MQTTUSR=juicebox
// MQTTPWD=dY*t7LSgGhc%M4
// # public mqtt server ip
// MQTTSERVER=mqtt://128.199.220.209

const App = () => {
    const { user, performLogout } = useAuth()
    const [conState, setConState] = useState('not connected')

    // const client = new mqtt.Client(
    //     '128.199.220.209',
    //     Number(9001),
    //     'clientId420'
    // )

    // const client = mqtt.connect({
    //     host: 'ws://128.199.220.209:9001/mqtt',
    //     username: 'juicebox',
    //     password: 'dY*t7LSgGhc%M4',
    // })
    useEffect(() => {
        // client.connect({
        //     useSSL: false,
        //     userName: 'juicebox',
        //     password: 'dY*t7LSgGhc%M4',
        //     onSuccess: () => {
        //         console.log('connected to mqtt server')
        //         setConState('connected')
        //     },
        // })
    })

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
