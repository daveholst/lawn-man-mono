import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { AddJuicebox } from "./routes/add-juicebox";
import { Auth } from "./routes/auth";
import { AuthProvider } from "./hooks/useAuth"

// const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/add-juicebox' element={<AddJuicebox />} />
                        <Route path='/auth' element={<Auth />} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
    document.getElementById("root")
);