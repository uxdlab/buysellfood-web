import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux"

export const Loader = () => {
    let loader = useSelector(e => e.loader)


    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 99999 }}
            open={loader}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
