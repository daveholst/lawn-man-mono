import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

interface RequireAuthProps {
    redirectPath: string
    children: React.ReactNode
}

export function RequireAuth(props: RequireAuthProps): JSX.Element {
    const { user } = useAuth()
    if (user) {
        return <>{props.children}</>
    }
    // TODO can add some tricks here to redirect to previous page? broke it last time
    return <Navigate to={props.redirectPath} />
}
