import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import shiftsFormReducer from '../reducers/shiftsFormReducer';
import shiftsReducer from '../reducers/shiftsReducer';
import uiRegisterReducer from '../reducers/uiRegisterReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    registerErrors: uiRegisterReducer,
    shifts: shiftsReducer,
    shiftsForm: shiftsFormReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)