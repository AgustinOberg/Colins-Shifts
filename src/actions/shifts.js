import { db } from "../firebase/firebaseConfig";
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

