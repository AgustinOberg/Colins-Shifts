import React from 'react'
import { AppRouter } from './routers/AppRouter'
import CssBaseline from '@material-ui/core/CssBaseline';

export const Colinshifts = () => {
    return (
        <>
            <CssBaseline/>      {/* Same than Normalize.css */}
            <AppRouter/>
        </>
    )
}
