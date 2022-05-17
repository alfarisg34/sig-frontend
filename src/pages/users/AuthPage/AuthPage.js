import React from 'react'
import Login from './Login'
import Register from './Register'
import { useLoginPageContext } from '../../../contexts/LoginPageContext'

function AuthPage() {
    const loginPageContext = useLoginPageContext()

    return (
        <div className="bg-background-spring">
            <section className="min-h-screen bg-summer-mobile md:bg-summer-large bg-cover bg-center py-32 md:py-36">

                <div className="relative w-5/6 sm:w-3/4 md:w-3/4 lg:w-1/2 mx-auto bg-themePeach grid grid-cols-1 md:grid-cols-2 justify-items-stretch rounded-3xl">
                    <div className="flex items-center justify-center px-2 py-8 md:py-16">
                    </div>

                    {loginPageContext.loginPageState ? (
                        <Login />
                    ) : (
                        <Register />
                    )}
                </div>

            </section>
        </div>
    )
}

export default React.memo(AuthPage)
