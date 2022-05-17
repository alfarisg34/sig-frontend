import Api from "./Api"

const Csrf = {
    getCookie() {
        Api.get('/csrf-cookie')
    }
}

export default Csrf