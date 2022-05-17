import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal(props) {

    return (
        <>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={props.closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0  bg-black bg-opacity-50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-xl space-y-4 px-4 py-8 overflow-hidden text-middle align-middle transition-all transform bg-white shadow-xl rounded-xl">
                                <Dialog.Title
                                    as="div"
                                    className="text-paragraph-heading font-poppins text-admin-orange font-semibold"
                                >
                                    {props.title}
                                </Dialog.Title>

                                {props.children}

                                <button
                                    onClick={props.onClick}
                                    className="py-1 px-8 bg-admin-orange text-button text-white rounded-lg focus:outline-none"
                                >Close</button>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal

export const StatusModal = (props) => {

    function printMethod(data) {
        if(typeof data === 'string') {
            return data
        } else if(typeof data === 'object' && data !== null) {
            console.log(data)
            return 'Error! Input tidak sesuai!'
        }
    }

    return (
        <div className="bg-gray-100 rounded-lg py-6 mx-4" >
            <div className="text-paragraph-1 font-poppins text-admin-gray font-medium">
                {printMethod(props.children)}
            </div>
        </div>
    )
}

