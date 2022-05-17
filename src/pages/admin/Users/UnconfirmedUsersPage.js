import React from 'react'
import UnconfirmedUsersTable from '@components/AdminTable/UnconfirmedUsersTable'
import useTicket from '@hooks/Admin/useTicketing'
import Modal from '@components/AdminComponents/Modal'
import DataLoading from '@components/AdminComponents/DataLoading'

function UnconfirmedUsersPage() {

    const { state, confirmTicket, closeModal, openModal, isOpen, statusMessage } = useTicket('unconfirmed')

    function renderElement() {
        if (state.loading)
            return <DataLoading />
        else if (state.error !== '')
            return <div className="text-heading-3 mt-60 w-full">{state.error}</div>
        else
            return <UnconfirmedUsersTable data={state.data} confirmUserFunc={confirmTicket} />
    }

    return (
        <div className="pt-12 space-y-16 pb-40">
            {/* Title */}
            <div className="text-heading-2 font-poppins font-semibold">Unconfirmed Users</div>
            {/* Content */}
            <div className="space-y-8" >
                <div className="text-center">
                    {/* Table goes here */}
                    {renderElement()}
                    <Modal
                        openModal={openModal}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        onClick={closeModal}
                        title="STATUS"
                    >
                        <div className="bg-gray-100 rounded-lg py-6 mx-4" >
                            <div className="text-paragraph-1 font-poppins text-admin-gray font-medium">{statusMessage}</div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default UnconfirmedUsersPage