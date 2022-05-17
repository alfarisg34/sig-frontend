import React from 'react'
import { NavLink } from 'react-router-dom'
// import logoBFF from '@images/bff-logogram.png'
import SidebarDisclosure from './SidebarDisclosure'
import Menu from './Menu'


function AdminSidebar() {
    
    const usersLists = [
        {link:'/bff-admin/users',key:1, name:'All Users'},
        {link:'/bff-admin/confirmed-users',key:2, name:'Confirmed Users'},
        {link:'/bff-admin/unconfirmed-users',key:3, name:'Unconfirmed Users'},
    ] 
    const competitionLists = [
        {link:'/bff-admin/art',key:1, name:'Art'},
        {link:'/bff-admin/esport',key:2, name:'Esport'},
        {link:'/bff-admin/entrepreneur',key:3, name:'Entrepreneur'},
    ] 

    return (
        <div className="no-scrollbar overflow-y-auto bg-white w-80 h-full rounded-r-3xl space-y-8 sticky top-0 left-0 font-poppins select-none" >
            {/* Logo and Title */}
            <NavLink to="/bff-admin" >
            <div className="sticky top-0 bg-white  pt-8 pb-4 px-6" >
                <div className="flex items-center space-x-2">
                    {/* <img src={logoBFF} className="w-6 h-6" alt="logo" /> */}
                    <div className="font-poppins font-extrabold text-3xl">Dashboard BFF</div>
                </div>
            </div>
            </NavLink>
            {/* Menus */}
            <div className="text-paragraph-heading space-y-4 pb-8 px-6">
                <SidebarDisclosure button="Users" lists={usersLists} />
                <SidebarDisclosure button="Competition" lists={competitionLists}  />
                <Menu link="/bff-admin/timeline" text="Timeline" />
                <Menu link="/bff-admin/gallery" text="Gallery" />
                <Menu link="/bff-admin/merch" text="Merch" />
                <Menu link="/bff-admin/workshop" text="Workshop" />
                <Menu link="/bff-admin/banner" text="Banner" />
                <Menu link="/bff-admin/saran" text="Saran" />
            </div>
        </div>
    )
}

export default AdminSidebar
