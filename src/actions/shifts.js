import { db, firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startAddData = () =>{
    return(dispatch)=>{
        dispatch(startLoading())
        db.collection('shifts').onSnapshot(snap => {
            const shifts = []
            snap.forEach(element => {
                const shift = {
                    id: element.id,
                    ...element.data()
                }
                shifts.push(shift)
            });
            dispatch(addData(shifts))
            dispatch(endLoading())
        })
    }
}

export const startLoading = () => ({
    type: types.shiftsStartLoading
})
export const endLoading = () => ({
    type: types.shiftsEndLoading
})

export const addData = (data) =>({
    type: types.shiftsAddData,
    payload : {
        data: data
    }
})

export const startTakeShiftWithoutUid = (dni, name, profession, proffessional, date, hour) => {
    return (dispatch) =>{
        dispatch(startLoading())
        const formattedData = {
            dni: dni,
            name: name,
            profession: profession,
            professional: proffessional,
            date: date,
            hour: hour
        }
        db.collection("persons").where('name','==', proffessional)
                                .where('profession','==', profession)
                                .get()
                    
                    .then(snap =>{
                        snap.forEach(element => {
                            const proId = element.id
                            dispatch(startTakeShiftWithUid(formattedData, proId))
                        });
                    })
    }
}

export const startTakeShiftWithUid = (data, uid) => {
    return (dispatch) =>{
        db.collection("shifts").doc(uid).update({
            shifts: firebase.firestore.FieldValue.arrayUnion(data)
        })
        dispatch(endLoading())
    }
}