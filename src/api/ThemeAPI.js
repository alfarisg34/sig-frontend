import Api from "./Api"
import Csrf from './Csrf'

const ThemeAPI = {
    
    async getActiveThemeUser() {
        await Csrf.getCookie()

        return Api.get('/tema/user')
    },

    async getActiveTheme() {
        await Csrf.getCookie()

        return Api.get('/tema')
    },

    async switchTheme(data) {
        await Csrf.getCookie()

        return Api.post(`/tema/switch`, data)
    },

    async createTheme(data) {
        await Csrf.getCookie()

        return Api.post('/tema', data)
    },
}

export default ThemeAPI