import React from 'react'

function Button(props) {
    return (
        <button 
            className="bg-white hover:bg-gray-50 cursor-pointer p-3 w-min rounded-lg shadow-md focus:outline-none disabled:opacity-40 select-none"
            onClick={props.onClick} 
            disabled={props.disabled}
            type={props.type}
        >
            {props.children}
        </button>
    )
}

export const ActionButton = (props) => {

    const color = (props.color!=null) ? props.color : "text-admin-blue"

    return (
        <button 
            className={`focus:outline-none font-semibold ${color}`}
            onClick={props.onClick}    
        >{props.text}</button>
    )
}

export default Button
