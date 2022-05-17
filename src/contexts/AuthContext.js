import React, { useContext, useEffect } from "react"
import { UseAuth } from "../hooks/UseAuth"
import Cookies from 'js-cookie'

const AuthContext = React.createContext()

function AuthContextProvider({ children }) {
    const { loggedIn, authLoginHandler } = UseAuth()
    // console.log(loggedIn)
    const readCookie = () => {
        const user = Cookies.get('user')
        if(user) {
            authLoginHandler()
        }
    }

    useEffect(() => {
        readCookie()
    })

    return (
        <AuthContext.Provider 
            value={{isLoggedIn: loggedIn}}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuthContext() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthContextProvider')
    }
    return context
}

export { AuthContextProvider, useAuthContext }