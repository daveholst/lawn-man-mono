import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

interface RequireAuthProps {
    // redirectPath: string
    children: React.ReactNode
}

export function RequireAuth(props: RequireAuthProps): JSX.Element {
    const { user } = useAuth()
    if (user) {
        return <>{props.children}</>
    }
    // TODO can add some tricks here to redirect to previous page? broke it last time
    if (window.location.host.split('.')[0] === 'auth') {
        return <Navigate to="/login" />
    }
    //TODO pass something in to allow returning??
    window.location.href = 'https://auth.lawnman.club'
    return <></>
}
