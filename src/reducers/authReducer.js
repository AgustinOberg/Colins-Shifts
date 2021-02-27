import React from 'react'
import { types } from '../types/types';

const initialState = {
    authenticated: false,
    error: null
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                authenticated: true,
                uid: action.payload.uid,
                name: action.payload.name
            }
            
        case types.logout:
            return { 
                authenticated: false
            }
        case types.loginError:
            return {
                authenticated: false,
                error: action.payload.message
            }
        
    
        default:
            return state;
    }
}

export default authReducer
