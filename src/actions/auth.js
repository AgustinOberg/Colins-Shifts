import { firebase } from '../firebase/firebaseConfig'
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

export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
            }
        )
        .catch(err => { 
            dispatch(loginError(err.message))
        })
    }
}

export const loginError = (message) =>({
    type : types.loginError,
    payload: {
        message: message
    }
})

export const registerSuccess = () =>({
    type: types.regSuccess,
    payload: {
        type: 'SUCCESS'
    }
})
export const registerError = (message) =>({
    type: types.regErrorReset,
    payload: {
        message: message
    }
})

export const registerErrorsReset = () => ({
    type: types.regReset

})

export const registerWithEmailPasswordNameNum = (email,password, name,phone) =>{
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(({user}) => {
            user.updateProfile({displayName: name})
            dispatch(registerSuccess())
        })
        .catch(err => {
            dispatch(registerError(err.message))
        })

    }
}
