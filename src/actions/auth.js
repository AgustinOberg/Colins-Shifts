import { firebase, db } from '../firebase/firebaseConfig'
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

export const startLoading = () =>({
    type: types.startLoading
})

export const endLoading = () =>({
    type: types.endLoading
})

export const startLoginWithEmailPassword = (email, password) => {
 
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
            dispatch(endLoading())
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

export const firebaseRegister = (uid, name, email, phone, profession) =>{
    return ( dispatch ) =>{
        db.collection("persons").doc(uid).set({
            name: name,
            email: email,
            phone: phone,
            profession: profession
        }) 
        db.collection("shifts").doc(uid).set({
            shifts: []
        })
        
        .then(res => dispatch(endLoading()))
    }
}

export const registerWithEmailPasswordNameNum = (email,password, name,phone, profession) =>{
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(({user}) => {
            user.updateProfile({displayName: name})
            dispatch(registerSuccess())
            dispatch(firebaseRegister(user.uid,name,email,phone, profession))
            
        })
        .catch(err => {
            dispatch(registerError(err.message))
            dispatch(endLoading())
        })

    }
}
