import { useCallback, useReducer, useEffect, useState } from 'react'
import UseModal from '@hooks/UseModal'
import ThemeAPI from '@api/ThemeAPI'
import UseAPI from '@hooks/UseAPI'

const initialStyle = {
    heroBackground: 'bg-spring-mobile md:bg-spring-large',
    footerBackground: 'bg-spring-footer',
    backgroundColor: 'bg-background-spring',
    primaryColor: 'green'
}

const reducer = (style, action) => {
    switch (action) {
        case 'Summer':
            return {
                heroBackground: 'bg-summer-mobile md:bg-summer-large',
                footerBackground: 'bg-summer-footer',
                backgroundColor: 'bg-background-summer',
                primaryColor: 'yellow'
            }
        case 'Autumn':
            return {
                heroBackground: 'bg-autumn-mobile md:bg-autumn-large',
                footerBackground: 'bg-autumn-footer',
                backgroundColor: 'bg-background-autumn',
                primaryColor: 'orange'
            }
        case 'Winter':
            return {
                heroBackground: 'bg-winter-mobile md:bg-winter-large',
                footerBackground: 'bg-winter-footer',
                backgroundColor: 'bg-background-winter',
                primaryColor: 'blue'
            }
        case 'Spring':
            return {
                heroBackground: 'bg-spring-mobile md:bg-spring-large',
                footerBackground: 'bg-spring-footer',
                backgroundColor: 'bg-background-spring',
                primaryColor: 'green'
            }
        case 'RESET':
            return { style: initialStyle }

        default:
            return style
    }
}

function useTheme() {

    const [closeModal, openModal, isOpen] = UseModal()
    const [closeThisStatusModal, openStatusModal, statusIsOpen] = UseModal()
    const [state, dispatch] = UseAPI()
    const [style, dispatchTheme] = useReducer(reducer, initialStyle)
    const [selectedOption, setSelectedOption] = useState()
    const [statusMessage, setStatusMessage] = useState(null)

    const getTheme = useCallback(() => {
        ThemeAPI.getActiveThemeUser()
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data.data })
                dispatchTheme(res.data.data.nama)
                setSelectedOption(res.data.data.nama)
            })
            .catch(err => {
                dispatch({ type: 'FETCH_FAILED' })
            })
    }, [dispatch])

    const switchTheme = (data) => {
        const dataRegister = new FormData()
        dataRegister.append("nama", data)
        closeModal()

        ThemeAPI.switchTheme(dataRegister)
            .then((response) => {
                openStatusModal()
                setStatusMessage(response.data.message)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const resetState = () => {
        dispatch({ type: 'RESET' })
    }

    const onRadioButtonValueChange = (event) => {
        setSelectedOption(event.target.value)
    }

    const submitChange = (event) => {
        event.preventDefault()
        switchTheme(selectedOption)
    }

    const closeStatusModal = () => {
        closeThisStatusModal()
        setTimeout(() => { setStatusMessage(null) }, 2000)
        getTheme()
    }

    useEffect(() => {
        getTheme()
        return () => {
            dispatch({type:'RESET'})
        }
    }, [getTheme, dispatch])

    return { state, style, selectedOption, onRadioButtonValueChange, submitChange, getTheme, switchTheme, resetState, closeModal, openModal, isOpen, closeStatusModal, openStatusModal, statusIsOpen, statusMessage, dispatch }
}

export default useTheme
