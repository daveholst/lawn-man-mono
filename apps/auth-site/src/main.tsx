import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
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
