import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAuth, useAuth } from '@lawn-man-mono/shared-components'
import { AddJuicebox } from './routes/add-juicebox'
import { Auth } from './routes/auth'

const App = () => {
    const { user, performLogout } = useAuth()

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth redirectPath="/login">
                        <h1>Base App</h1>
                        <p>Hellooo {user?.idToken.payload.email} </p>
                        <button onClick={performLogout}>Log Out!!!!!!!!</button>
                    </RequireAuth>
                }
            />
            <Route path="/login" element={<Auth />} />
            <Route path="/add-juicebox" element={<AddJuicebox />} />
        </Routes>
    )
}

export default App
