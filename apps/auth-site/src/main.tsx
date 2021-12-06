import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { AddJuicebox } from "./routes/add-juicebox";
import { Auth } from "./routes/auth";

// const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/add-juicebox' element={<AddJuicebox />} />
                    <Route path='/auth' element={<Auth />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
    document.getElementById("root")
);