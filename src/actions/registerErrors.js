import { types } from '../types/types'

export const dniError = (message) => ({
    type: types.regInvalidDni,
    payload : {
        message: message
    }
})
export const passwordError = (message) => ({
    type: types.regInvalidPw,
    payload : message
})
export const professionError = (message) => ({
    type: types.regInvalidProfession,
    payload : message
})
export const emailError = (message) => ({
    type: types.regInvalidEmail,
    payload :  message
})
export const nameError = (message) => ({
    type: types.regInvalidName,
    payload : message
})
export const phoneError = (message) => ({
    type: types.regInvalidPhone,
    payload : message
})

