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
    }
}

export const registerWithEmailPasswordNameNum = (email,password, name,phone) =>{
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(({user}) => {
            user.updateProfile({displayName: name})
        })
    }
}