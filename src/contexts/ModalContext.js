import React, { useContext } from 'react'
import UseModal from '../hooks/UseModal'

const ModalContext = React.createContext()

function ModalContextProvider({children}) {
    const [ closeModal, openModal,  isOpen ] = UseModal()

    return (
        <ModalContext.Provider
            value={{
                isOpenState: isOpen,
                closeModalDispatch: closeModal,
                openModalDispatch: openModal
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

function useModalContext() {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error('useModalContext must be used within a ModalContextProvider')
    }
    return context
}

export { ModalContextProvider, useModalContext }
