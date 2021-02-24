import React from 'react'
import { types } from '../types/types';


const authReducer = (state= {authenticated: false}, action) => {
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
    
        default:
            return state;
    }
}

export default authReducer
