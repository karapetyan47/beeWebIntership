import { USER_LOGGED_IN, 
         FETCH_USERS_SUCCESS } from '../../constants/const-actions/action-types';

const initialState = {
    users: [],
    isLoggedIn: false
}

const reducer = ( state = initialState, action ) => {
    switch (action.type){
        case USER_LOGGED_IN:
            return{
                ...state,
                isLoggedIn: true
            };
        case FETCH_USERS_SUCCESS:    
            return{
                ...state,
                users: action.payload
            }
        default: return state;
    }
}

export default reducer;
