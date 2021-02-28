import { types } from "../types/types"

const initialState = {
    formProfessional: null,
    formProfession: null,
    formDate: null,
}

const shiftsFormReducer = (state=initialState, action) =>{
    switch (action.type) {
        case types.shiftsFormDate:
            return {
                ...state,
                formDate: action.payload.formDate 
            }
            
        case types.shiftsFormProfession:
            return {
                ...state,
                formProfession: action.payload.shiftsFormProfession
            }
            
        case types.shiftsFormProfessional:
            return {
                ...state,
                formProfessional: action.payload.shiftsFormProfessional 
            }
            
    
        default:
            return state;
    }
}

export default shiftsFormReducer