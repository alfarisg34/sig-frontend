import axios from 'axios'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`
const token = Cookies.get('token')

const Api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: { 'Authorization': 'Bearer ' + token }
})

Api.interceptors.response.use(response => response, error => {
    
    if (error.response  && error.response.status === 401) {
        Cookies.remove('token')
        Cookies.remove('logged_as_admin')
        Cookies.remove('logged')
        // console.log('bukan admin')
        Swal.fire({
            title: 'Error!',
            text: 'Harap login terlebih dahulu!',
            icon: 'error',
            confirmButtonText: 'Ok'
        }).then(() => {
            window.location.reload()
        })


        return Promise.reject()
    }

    // console.log('bukan admin jilid 2')
    return Promise.reject(error)
})

export default Api