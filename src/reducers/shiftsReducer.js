import { types } from "../types/types"

const initialState = {
    data: null,
    loading: false,
    error: null
}

const shiftsReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.shiftsAddData:
            return {
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
    
        default:
            return state;
    }
}

export default shiftsReducer