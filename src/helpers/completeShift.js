import {db, firebase} from '../firebase/firebaseConfig'

export const completeShift =   (data, shifts) =>{
       
        const aux = data.day.replace('/', '-')
        const day = aux.replace('/', '-')

        db.collection("completed").doc(day).update({
            completedShifts: firebase.firestore.FieldValue.arrayUnion({...data, hourComplete: Date.now()})
        })  
        .then (x =>{ 
            deleteShift(data, shifts)
        })
        .catch ( z => {
            db.collection("completed").doc(day).set({completedShifts:[{...data, hourComplete: Date.now()}]})
            .then (w => {
                deleteShift(data, shifts)
            })
        })
}

export const deleteShift = (data, shifts) =>{
    const shiftData = shifts.find(eachUid => eachUid.id === data.uid).shifts.filter( 
        eachShift => eachShift.date === data.day && eachShift.professional === data.professional && eachShift.hour === data.hour
        )
    db.collection("shifts").doc(data.uid).update({
        shifts: firebase.firestore.FieldValue.arrayRemove(shiftData[0])
    })
}