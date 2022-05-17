import { useState } from 'react'
import { useModalContext } from "@contexts/ModalContext"
import AuthAPI from '@api/AuthAPI'
import Cookies from 'js-cookie'

function useAdminAuth() {
    // let history = useHistory()
    const modalContext = useModalContext()

    const [disable, setDisable] = useState(false)
    const [logRes, setLogRes] = useState(null)

    const loginSubmit = (logData) => {
        setDisable(true)
        // console.log(logData)

        const dataLogin = new FormData()
        dataLogin.append("email", logData.email)
        dataLogin.append("password", logData.password)

        AuthAPI.loginAdmin(dataLogin)
            .then((response) => {
                setDisable(false)
                // console.log(dataLogin)
                // console.log(response)
                if (response.data.message === 'Login Berhasil!') {
                    setDisable(false)
                    Cookies.set('logged_as_admin', true)
                    Cookies.set('token', response.data.content.access_token)
                    // history.push('/bff-admin')
                    window.location.reload()
                } else {
                    setDisable(false)
                    // console.log('salah')
                    setLogRes({
                        title: 'Gagal!',
                        content: 'Email atau password salah.',
                        status: 'failed'
                    })
                    // openModal()
                    modalContext.openModalDispatch()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const logout = () => {
        AuthAPI.logout()
            .then((response) => {
                Cookies.remove('token')
                Cookies.remove('logged_as_admin')
                console.log(response)
                // history.push('/bff-admin/login')
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return { loginSubmit, logout, disable, logRes }
}

export { useAdminAuth }
