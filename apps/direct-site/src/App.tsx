import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth, useAuth } from '@lawn-man-mono/shared-components'
import mqtt from 'mqtt'
import { ControlPanel } from './Components/ControlPanel'

const App = () => {
    const { user, performLogout } = useAuth()

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth>
                        {/* <h1>
                            Direct Control Site MQTT: {`Status: ${conState}`}
                        </h1>
                        <p>Hellooo {user?.idToken.payload.email} </p>
                        <button onClick={performLogout}>Log Out!!!!!!!!</button>
                        <br />
                        <button onClick={waterOn}>Water On</button>
                        <br />
                        <button onClick={waterOff}>Water Off</button> */}
                        <ControlPanel />
                    </RequireAuth>
                }
            />
        </Routes>
    )
}

export default App
