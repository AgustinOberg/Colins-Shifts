import React from 'react'
import { AppRouter } from './routers/AppRouter'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store/store';
import logger from './Logger';

export const Colinshifts = () => {
    logger()
    return (
        <Provider store={store}>
            <CssBaseline/>      {/* Same than Normalize.css */}
            <AppRouter/>
        </Provider>
    )
}
