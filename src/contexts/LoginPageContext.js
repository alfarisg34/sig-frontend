import React, { useContext } from 'react'
import UseNavbar from '../hooks/UseNavbar'

const LoginPageContext = React.createContext()

function LoginPageContextProvider({children})  {
    const [ isOnLoginPage, onLoginPageHandler, notOnLoginPageHandler ] = UseNavbar()

    return (
        <LoginPageContext.Provider value={{ 
            loginPageState: isOnLoginPage, 
            loginPageDispatch: onLoginPageHandler,
            notLoginPageDispatch: notOnLoginPageHandler
        }}>{children}</LoginPageContext.Provider>
    )
}

function useLoginPageContext() {
    const context = useContext(LoginPageContext)
    if (context === undefined) {
        throw new Error('useLoginContext must be used within a LoginPageContext')
    }
    return context
}

export { LoginPageContextProvider, useLoginPageContext }
