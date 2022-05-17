import React, { useState } from 'react'
// import useTheme from '@hooks/Admin/useTheme'
import { Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
import AdminSidebar from '@components/AdminSidebar/AdminSidebar'
import Button from '@components/AdminComponents/Button'
// import Modal, { StatusModal } from '@components/AdminComponents/Modal'
// import SelectTheme from './Competition/SelectTheme'
import { useAdminAuth } from '@hooks/Admin/useAdminAuth'
// import { ColorSwatchIcon } from '@heroicons/react/solid'

function TemplateAdmin(props) {
    // Test
    const { logout } = useAdminAuth()
    const [isShowing, setIsShowing] = useState(true)
    // const { closeModal, openModal, isOpen, state, selectedOption, onRadioButtonValueChange, submitChange, closeStatusModal, openStatusModal, statusIsOpen, statusMessage } = useTheme()
    const toggle = () => {
        setIsShowing(!isShowing)
    }

    return (
        <div className="flex w-screen h-screen bg-admin-background overflow-hidden">
            <Transition
                show={isShowing}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <AdminSidebar />
            </Transition>
            <div className="flex-1 h-screen overflow-scroll">
                <div className="sticky top-0" >
                    <div className="flex items-center justify-between px-12 pb-2 pt-8">
                        <Button onClick={toggle}>
                            <MenuIcon className="w-5 h-5" />
                        </Button>
                        <div className="space-x-4 items-center flex">
                            {/* <Button onClick={openModal} >
                                <div className="justify-around px-4 flex space-x-4 font-extrabold text-admin-orange">
                                    <ColorSwatchIcon className="h-6 w-6" />
                                    <div>Theme</div>
                                </div>
                            </Button> */}
                            <Button onClick={logout}>
                                <div className="px-10 font-extrabold text-admin-orange">Logout</div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 px-16 min-w-min">
                    {props.children}
                </div>
            </div>
            {/* Status Modal */}
            {/* <SelectTheme
                openModal={openModal}
                isOpen={isOpen}
                closeModal={closeModal}
                state={state}
                selectedOption={selectedOption}
                onRadioButtonValueChange={onRadioButtonValueChange}
                submitChange={submitChange}
            /> */}
            {/* <Modal
                openModal={openStatusModal}
                isOpen={statusIsOpen}
                closeModal={closeStatusModal}
                onClick={closeStatusModal}
                title="STATUS"
            >
                <StatusModal>
                    {statusMessage}
                </StatusModal>
            </Modal> */}
        </div>
    )
}

export default TemplateAdmin
