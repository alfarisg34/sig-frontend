import { useReducer } from 'react'

const initialState = false

const reducer = (state, action) => {
    switch(action) {
        case 'onLoginPage':
            return true
        case 'notOnLoginPage':
            return false
        default:
            return state
    }
}

function UseNavbar() {
    const [isOnLoginPage, dispatch] = useReducer(reducer, initialState)
    const onLoginPageHandler = () => {
        dispatch('onLoginPage')
    }
    const notOnLoginPageHandler = () => {
        dispatch('notOnLoginPage')
    }
    return [ isOnLoginPage, onLoginPageHandler, notOnLoginPageHandler ]
}

export default UseNavbar
