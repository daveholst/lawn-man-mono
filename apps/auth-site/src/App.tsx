import React, { useState } from "react";
import useAuth from "./hooks/useAuth"

const App = () => {
    const { user, performLogout } = useAuth()

    return (
        <>
            <h1>Base App</h1>
            <p>Hellooo {user?.email} </p>
            <button onClick={performLogout}>Log Out!!!!!!!!</button>
        </>
    );
};

export default App;
