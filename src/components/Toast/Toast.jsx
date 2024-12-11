import React from 'react';
import { Alert, Snackbar } from "@mui/material"
import { useSelector } from "react-redux"
import { toast } from '../../utils';





export const Toast = () => {
    let toaster = useSelector(e => e.toast)

    return (
        <>
            <Snackbar open={toaster.open} autoHideDuration={2000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}

                onClose={() => toast.stop()}
            >
                <Alert
                    onClose={() => toast.stop()}
                    severity={toaster.type}
                    variant="filled"
                    sx={{ width: '100%', fontFamily: "Manrope-Bold" }}
                >
                    {toaster.msg}</Alert>
            </Snackbar>
        </>
    )
}
