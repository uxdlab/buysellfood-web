import React from 'react'

export const Input = ({ ...props }) => {
    return (
        <input
            type="text"
            className='form-control'
            {...props}
        />
    )
}
