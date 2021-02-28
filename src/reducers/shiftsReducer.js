import { types } from "../types/types"

const initialState = {
    data: [{
        id: "",
        name: "",
        profession: "",
        shifts: []
    }],
    loading: false,
    status: null,
}

const shiftsReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.shiftsAddData:
            return {
                ...state,
                data: action.payload.data, 
                loading: false,
                status: null
            }
    
        case types.shiftsAddstatus:
            return {
                ...state,
                loading: false,
                status: action.payload.status
            }
    
        case types.shiftsStartLoading:
            return {
                ...state, 
                loading: true
            }
        case types.shiftsAddSuccess:
            return {
                data: [{
                    id: "",
                    name: "",
                    profession: "",
                    shifts: []
                }],
                loading: false,
                status: 'SUCCESS',
            }
            
        
        case types.shiftsAddError:
            return {
                ...state,
                status: action.payload.error
            }
        case types.shiftsResetStatus:
            return {
                ...state,
                status: null
            }
            
        
            
        default:
            return state;
    }
}

export default shiftsReducer