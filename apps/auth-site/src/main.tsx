import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    Route,
    RouteProps,
    Routes,
    Navigate,
} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { AddJuicebox } from './routes/add-juicebox'
import { AuthProvider } from '@lawn-man-mono/shared-components'

ReactDOM.render(
    <StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
    document.getElementById('root')
)
