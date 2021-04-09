import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const LOGIN = 'education-axels/index/LOGIN';
const LOGOUT = 'education-axels/index/LOGOUT';

const initialState = {
    isLogin: false
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
    case LOGIN: 
        return {
            isLogin: true
        }
    case LOGOUT:
        return {
            isLogin: false
        }
    default: 
        return state;
    }
};

export const login = () => ({type: LOGIN});
export const logout = () => ({type: LOGOUT});

const rootReducer = combineReducers({
    form: formReducer,
    login: loginReducer
});

export const store = createStore(rootReducer);
