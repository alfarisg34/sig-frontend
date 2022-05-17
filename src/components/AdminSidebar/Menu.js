import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(props) {
    return (
        <NavLink
            to={props.link}
            className="flex justify-between w-full text-left hover:bg-gray-100 py-1 px-4 rounded-lg"
            activeClassName="text-admin-blue"
        >
            {props.text}
        </NavLink>
    )
}

export default Menu
