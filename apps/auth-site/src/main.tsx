import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, RouteProps, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { AddJuicebox } from "./routes/add-juicebox";
import { Auth } from "./routes/auth";
import useAuth, { AuthProvider } from "./hooks/useAuth"

function RequireAuth({ children }) {
    const { user } = useAuth();

    return user === true
        ? children
        : <Navigate to="/login" replace />;
}

ReactDOM.render(
    <StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <AuthProvider>
                    {/* <Router /> */}
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <App />
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
                    {/* <App></App> */}
                </AuthProvider>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
    document.getElementById("root")
);