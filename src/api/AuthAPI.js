import Api from './Api'
import Csrf from './Csrf'

const AuthAPI = {
    async register(data) {
        await Csrf.getCookie()

        return Api.post('/register', data)
    },

    async login(data) {
        await Csrf.getCookie()

        return Api.post('/api/auth/login', data)
    },

    async logout() {
        await Csrf.getCookie()

        return Api.post('/auth/logoutall')
    },

    async loginAdmin(data) {
        await Csrf.getCookie()

        return Api.post('/login/admin', data)
    },

    async resendVerif(data) {
        await Csrf.getCookie()

        return Api.post('/email/verification-notification', data)
    },
}

export default AuthAPI