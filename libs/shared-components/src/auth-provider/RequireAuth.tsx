import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

interface RequireAuthProps {
    // redirectPath: string
    children: React.ReactNode
}

export function RequireAuth(props: RequireAuthProps): JSX.Element {
    const { user } = useAuth()
    console.log(window.location.hostname)
    if (user) {
        return <>{props.children}</>
    }
    // TODO can add some tricks here to redirect to previous page? broke it last time
    if (window.location.host.split('.')[0] === 'auth') {
        return <Navigate to="/login" />
    }
    // TODO not sure what this was doing
    // if (
    //     window.location.hostname === 'localhost' &&
    //     window.location.port !== '3100'
    // ) {
    //     window.location.href = 'http://localhost:3100'
    //     return <></>
    // }
    if (
        (window.location.hostname === 'localhost' || '127.0.01') &&
        window.location.port === '3100'
    ) {
        return <Navigate to="/login" />
    }

    //TODO pass something in to allow returning??
    window.location.href = 'https://auth.lawnman.club'
    return <></>
}
