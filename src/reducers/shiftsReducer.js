import { types } from "../types/types"

const initialState = {
    data: [{
        id: "",
        name: "",
        profession: "",
        shifts: []
    }],
    loading: false,
    error: null,
    dateSelected : null
}

const shiftsReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.shiftsAddData:
            return {
                ...state,
                data: action.payload.data, 
                loading: false,
                error: null
            }
    
        case types.shiftsAddError:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
    
        case types.shiftsStartLoading:
            return {
                ...state, 
                loading: true
            }
        case types.shiftsEndLoading:
            return {
                ...state, 
                loading: false
            }
            
        case types.shiftsDateAdd:
            return {
                ...state, 
                dateSelected: action.payload.date
            }
            
        default:
            return state;
    }
}

export default shiftsReducer