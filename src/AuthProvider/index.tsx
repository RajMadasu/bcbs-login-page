import React, { createContext, useState } from "react";
import { loginRequest } from "../services/authService";
import { IAuthProvider, IContext } from "../types/login";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [token, setToken] = useState<string>();

    async function authenticate(email: string, password: string) {
        const response = await loginRequest({ email, password });
        console.log(response)

        setToken(response.token);
    }

    function logout() {
        setToken('')
    }

    return (
        <AuthContext.Provider value={{token, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}