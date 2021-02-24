import React from 'react'
import { types } from '../types/types'

export const logout = () => ({
    type: types.logout
})

export const login = (uid, name) => (
    {
        type: types.login,
        payload: {
            uid: uid,
            name: name
        }
    }
)
