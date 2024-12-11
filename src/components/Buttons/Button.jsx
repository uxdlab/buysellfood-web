import React from 'react'

export const Button = ({ title, primary, secondary, fullWidth, ...props }) => {
  return (
    <button
      className={`
            btn
            ${primary && 'btn_primary'}
            ${secondary && 'btn_secondary'}
            ${fullWidth && 'w-100'}
            `}
      {...props}
    >
      {title}
    </button>
  )
}
