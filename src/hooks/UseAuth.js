import { useState } from "react"
import { useModalContext } from "../contexts/ModalContext"
import AuthAPI from "../api/AuthAPI"
import Cookies from 'js-cookie'

function UseAuth() {
    const [loggedIn, setLoggedIn] = useState(false)
    const authLoginHandler = () => {
        setLoggedIn(true)
    }
    const authLogoutHandler = () => {
        // Cookies.remove('user')
        Cookies.remove('logged')
        Cookies.remove('token')
        setLoggedIn(false)
        AuthAPI.logout()
        .then(() => {
            // console.log(res)
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return { loggedIn, authLoginHandler, authLogoutHandler }
}

function UseLogin() {
    const modalContext = useModalContext()
    const [logRes, setLogRes] = useState(false)
    const [logErr, setLogErr] = useState(false)
    const [disable, setDisable] = useState(false)

    const { authLoginHandler } = UseAuth()

    const loginSubmit = (logData) => {
        setDisable(true)

        const dataLogin = new FormData()
        dataLogin.append("email", logData.email)
        dataLogin.append("password", logData.password)

        AuthAPI.login(dataLogin)
        .then((response) => {
            // console.log(response)
            if(response.data.message === 'Login Berhasil!') {
                setDisable(false)
                Cookies.set('logged', true)
                Cookies.set('token', response.data.content.access_token)
                authLoginHandler()
                window.location.reload()
            } else if(response.data.message === 'Email belum diverifikasi') {
                setDisable(false)
                setLogRes({
                    title: 'Gagal!',
                    content: 'Mohon maaf, email anda belum terverifikasi. Silakan cek email anda untuk melakukan verifikasi kemudian cobalah untuk login kembali.',
                    status: 'failed'
                })
                modalContext.openModalDispatch()
            } else {
                setDisable(false)
                setLogRes({
                    title: 'Gagal!',
                    content: 'Email atau password salah.',
                    status: 'failed'
                })
                modalContext.openModalDispatch()
            }
        })
        .catch(() => {
            // console.log(err.response)
            setDisable(false)
            setLogErr({
                title: 'Gagal!',
                content: 'Terjadi kesalahan server, mohon untuk coba beberapa saat lagi.',
                status: 'failed'
            })
            modalContext.openModalDispatch()
        })
        
    }

    return { loginSubmit, logRes, logErr, disable }
}

function UseRegister() {
    const modalContext = useModalContext()
    const [regRes, setRegRes] = useState(false)
    const [regErr, setRegErr] = useState(false)
    const [disable, setDisable] = useState(false)

    const registerSubmit = (regData) => {
        setDisable(true)

        const image = regData.foto[0]

        const dataRegister = new FormData()
        dataRegister.append("name", regData.nama)
        dataRegister.append("email", regData.email)
        dataRegister.append("password", regData.password)
        dataRegister.append("institusi", regData.institusi)
        dataRegister.append("telp", regData.telp)
        dataRegister.append("image", image)

        AuthAPI.register(dataRegister)
        .then((response) => {
            if (response.data.status === 'success') {
                setRegRes({
                    title: 'Akun Anda Berhasil Terdaftar!',
                    content: 'Silahkan cek email anda untuk verifikasi. Mohon menunggu 4-5 menit jika belum ada email yang masuk. Kemudian kembali ke halaman login untuk login menggunakan email yang telah diverifikasi.',
                    status: 'success'
                })
                setDisable(false)
            } else if (response.data.message.email[0] === 'The email has already been taken.') {
                setRegRes({
                    title: 'Gagal!',
                    content: 'Email sudah terdaftar.',
                    status: 'failed'
                })
                setDisable(false)
            }
            modalContext.openModalDispatch()
        })
        .catch((err) => {
            console.log(err)
            setDisable(false)
            setRegErr({
                title: 'Gagal!',
                content: 'Terjadi kesalahan server, mohon untuk coba beberapa saat lagi.',
                status: 'failed'
            })
            modalContext.openModalDispatch()
        })

    }

    return { registerSubmit, regRes, regErr, disable }
}

export { UseLogin, UseRegister, UseAuth }