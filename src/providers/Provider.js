import React from 'react'
import { LoginPageContextProvider } from '../contexts/LoginPageContext'
import { ModalContextProvider } from '../contexts/ModalContext'
import { AuthContextProvider } from '../contexts/AuthContext'

function Provider({ children }) {
    return (
        <ModalContextProvider>
            <AuthContextProvider>
                <LoginPageContextProvider>
                    {children}
                </LoginPageContextProvider>
            </AuthContextProvider>
        </ModalContextProvider>
    )
}

export default Provider
