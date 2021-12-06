// check you are loggin in
// grab your subId
// build a form / fill it in
// have it send data to the db via the api
import React from "react";
import useAuth from "../hooks/useAuth";

export function AddJuicebox() {
    const { user } = useAuth()
    console.log(user)

    return (
        <>
            <h1>Hello Add JuiceBox</h1>
            <p>Hellooo {user.email} </p>
        </>
    )
}