import {
  LOGIN_SUCCESS,
  FETCH_STAFFS_SUCCESS,
  ATTEMPT_LOGIN,
  LOGOUT,
  LOGIN_FAILED,
  FETCH_BENEFITS_SUCCESS
} from "redux/actions";

const initialState = {
  user: {},
  loadingUser: false,
  errorUser: false,
  users: [],
  loadingUsers: true,
  benefits: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return {
        ...state,
        loadingUser: true
      };
    case LOGIN_SUCCESS:
      return {
        users: [],
        user: action.payload,
        loadingUser: false
      };
    case FETCH_STAFFS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loadingUsers: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loadingUser: false,
        errorUser: true
      };
    case LOGOUT:
      return {
        user: {},
        loadingUser: false,
        users: [],
        loadingUsers: true
      };
    case FETCH_BENEFITS_SUCCESS:
      return {
        ...state,
        benefits: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
