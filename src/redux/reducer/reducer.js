import {
  LOGIN_SUCCESS,
  FETCH_STAFFS_SUCCESS,
  ATTEMPT_LOGIN,
  LOGOUT,
  LOGIN_FAILED,
  FETCH_BENEFITS_SUCCESS,
  FETCH_BENEFITS_HISTORYS_SUCCESS
} from "redux/actions";
import { FETCHED_BENEFITS_HISTORYS } from "../actions/actions-benefits";

const initialState = {
  user: {},
  loadingUser: false,
  errorUser: false,
  users: [],
  loadingUsers: true,
  benefits: [],
  benefitsHistorys: [],
  loadingBenefitsHistorys: true
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
        ...state,
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
        errorUser: false,
        users: [],
        loadingUsers: true,
        benefits: [],
        benefitsHistorys: [],
        loadingBenefitsHistorys: true
      };
    case FETCH_BENEFITS_SUCCESS:
      return {
        ...state,
        benefits: action.payload
      };
    case FETCHED_BENEFITS_HISTORYS:
      return {
        ...state,
        loadingBenefitsHistorys: true
      };
    case FETCH_BENEFITS_HISTORYS_SUCCESS:
      return {
        ...state,
        benefitsHistorys: action.payload,
        loadingBenefitsHistorys: false
      };
    default:
      return state;
  }
};

export default reducer;
