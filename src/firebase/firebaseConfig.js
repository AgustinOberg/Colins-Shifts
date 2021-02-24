import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyB16FQ7EHmUdqurP0Kg9Na5OVTebqBIoSM",
    authDomain: "colinshifts.firebaseapp.com",
    projectId: "colinshifts",
    storageBucket: "colinshifts.appspot.com",
    messagingSenderId: "95774687164",
    appId: "1:95774687164:web:8a54b0647ee84e086a35b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
export  {
    db,
    firebase
}