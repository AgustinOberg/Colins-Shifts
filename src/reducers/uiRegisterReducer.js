import React from 'react'
import { types } from '../types/types';

export const initialState = {
    loading: false,
    dni: null,
    name: null,
    profession: null,
    phone: null,
    email: null,
    password: null
}
//This reducer is uniquely for set custom error messages into the ADMIN Register (add new STAFF)

const uiRegisterReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.regInvalidDni:
            return {
                ...state,
                dni: action.payload.message
            }
        case types.regInvalidEmail:
            return {
                ...state,
                email: action.payload
            }
        case types.regInvalidName:
            return {
                ...state,
                name: action.payload
            }
        case types.regInvalidPhone:
            return {
                ...state,
                phone: action.payload
            }
        case types.regInvalidProfession:
            return {
                ...state,
                profession: action.payload
            }
         
        case types.regInvalidPw:
            return {
                ...state,
                pw: action.payload
            }
        default:
            return state;
    }
}

export default uiRegisterReducer;