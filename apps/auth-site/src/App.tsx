import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from "./hooks/useAuth"
import { AddJuicebox } from "./routes/add-juicebox";
import { Auth } from "./routes/auth";

const App = () => {
    const { user, performLogout } = useAuth()

    function RequireAuth({ children }) {
        if (user) {
            return children
        }
        // TODO can add some tricks here to redirect to previous page? broke it last time
        return <Navigate to="/login" />
    }

    console.log(user)


    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <h1>Base App</h1>
                        <p>Hellooo {user?.idToken.payload.email} </p>
                        <button onClick={performLogout}>Log Out!!!!!!!!</button>
                    </RequireAuth>
                }
            />
            <Route
                path="/login"
                element={<Auth />}
            />
            <Route
                path="/add-juicebox"
                element={<AddJuicebox />}
            />
        </Routes>
    );
};

export default App;
