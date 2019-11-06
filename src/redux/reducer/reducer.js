import { USER_LOGGED_IN, FETCH_USERS_SUCCESS } from "redux/actions";
import { FETCH_STAFFS_SUCCESS } from "redux/actions";

const initialState = {
  users: [],
  user: null,
  isLoggedIn: false,
  staffs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_STAFFS_SUCCESS:
      return {
        ...state,
        staffs: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
