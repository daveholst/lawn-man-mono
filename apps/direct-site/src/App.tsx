import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth, useAuth } from '@lawn-man-mono/shared-components'

const App = () => {
    const { user, performLogout } = useAuth()

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth redirectPath="https://auth.lawnman.club/login">
                        <h1>Direct Control Site</h1>
                        <p>Hellooo {user?.idToken.payload.email} </p>
                        <button onClick={performLogout}>Log Out!!!!!!!!</button>
                    </RequireAuth>
                }
            />
        </Routes>
    )
}

export default App
