import React from 'react'

export const Input = ({ error, ...props }) => {
    return (
        <input
            type="text"
            {...props}
            className={`form-control
                 ${error && 'error_input'}
                 `}
        />
    )
}
