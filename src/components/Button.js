import React from 'react'

function Button(props) {

    const colorSchemes = {
        orange:'bg-themeOrange',
        blue:'bg-themeBlue',
        green:'bg-themeGreen',
        yellow:'bg-themeYellow',
        adminblue:'bg-admin-blue',
        transparent:'bg-transparent',
        container:'bg-container'
    }

    const hoverColorSchemes = {
        orange:'hover:bg-hover-themeOrange',
        blue:'hover:bg-hover-themeBlue',
        green:'hover:bg-hover-themeGreen',
        yellow:'hover:bg-hover-themeYellow',
        adminblue:'hover:bg-hover-admin-blue',
    }

    const borderSchemes = {
        black:'border-4 border-black border-opacity-60',
        orange:'border-4 border-themeOrange',
        blue:'border-4 border-themeBlue',
        green:'border-4 border-themeGreen',
        yellow:'border-4 border-themeYellow',
        adminblue:'border-4 border-admin-blue',
        transparent:'border-4 border-transparent',
        container:'border-container'
    }

    const hoverBorderSchemes = {
        orange:'hover:border-hover-themeOrange',
        blue:'hover:border-hover-themeBlue',
        green:'hover:border-hover-themeGreen',
        yellow:'hover:border-hover-themeYellow',
        adminblue:'hover:border-hover-admin-blue',
    }

    const textColorSchemes = {
        black:'text-black',
        white:'text-white',
        orange:'text-themeOrange',
        blue:'text-themeBlue',
        green:'text-themeGreen',
        yellow:'text-themeYellow',
        adminblue:'text-admin-blue',
        transparent:'text-transparent',
        container:'text-container'
    }

    const hoverTextColorSchemes = {
        orange:'hover:text-hover-themeOrange',
        blue:'hover:text-hover-themeBlue',
        green:'hover:text-hover-themeGreen',
        yellow:'hover:text-hover-themeYellow',
        adminblue:'hover:text-hover-admin-blue',
    }

    const color = colorSchemes[props.color]
    const borderColor = borderSchemes[props.borderColor]
    const textColor = textColorSchemes[props.textColor]
    const hoverColor = hoverColorSchemes[props.color]
    const hoverBorderColor = hoverBorderSchemes[props.borderColor]
    const hoverTextColor = hoverTextColorSchemes[props.textColor]

    return (
        <button 
            type="button"
            onClick={props.onClick}
            disabled={props.disabled}
            className={`text-button rounded-lg disabled:opacity-50 ${borderColor} ${color} ${textColor} ${props.fontFamily} ${props.padding} ${props.margin} ${props.width} ${props.fontSize} ${props.focus} ${hoverColor} ${hoverBorderColor} ${hoverTextColor}`}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    color : 'orange',
    textColor : 'white',
    text: 'Button',
    padding:'px-6 py-1.5 sm:px-8 sm:py-1.5 xl:px-12 xl:py-1.5',
    margin : '',
    borderWidth : '',
    borderColor: '',
    width: '',
    fontSize: '',
    fontFamily: 'font-fonarto',
    focus: 'focus:outline-none'
}

export default Button
