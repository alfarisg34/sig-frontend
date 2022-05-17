import React from 'react'
import UsersTable from '@components/AdminTable/UsersTable'
import useTicket from '@hooks/Admin/useTicketing'
import DataLoading from '@components/AdminComponents/DataLoading'

function ConfirmedUsersPage() {

    const { state } = useTicket('confirmed')

    function renderElement() {
        if (state.loading)
            return <DataLoading />
        else if (state.error !== '')
            return <div className="text-heading-3 mt-60 w-full">{state.error}</div>
        else
            return <UsersTable data={state.data} />
    }

    return (
        <div className="pt-12 space-y-16 pb-40">
            {/* Title */}
            <div className="text-heading-2 font-poppins font-semibold">Confirmed Users</div>
            {/* Content */}
            <div className="space-y-8" >
                <div className="text-center">
                    {/* Table goes here */}
                    {renderElement()}
                </div>
            </div>
        </div>
    )
}

export default ConfirmedUsersPage