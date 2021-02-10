import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRouter = ({isAuthenticated, component: Component, ...rest}) => { 
    return (
        <Route {...rest} component={ (props) => (!isAuthenticated? ( <Component {...props} /> ) : ( <Redirect to="/welcome" />) ) }/>
    )
}

PublicRouter.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}