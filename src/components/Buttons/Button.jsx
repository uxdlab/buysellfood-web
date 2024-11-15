import React from 'react'

export const Button = ({ title, primary, fullWidth, ...props }) => {
    return (
        <button className={`
            ${primary && "btn_primary"}
            ${fullWidth && "w-100"}
            `}
            {...props}
        >{title}</button>
    )
}
