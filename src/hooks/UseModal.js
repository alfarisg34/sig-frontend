import { useState } from 'react'

function UseModal() {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return [ closeModal, openModal,  isOpen ]
}

export default UseModal
