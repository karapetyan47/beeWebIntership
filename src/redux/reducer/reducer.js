import {
  LOGIN_SUCCESS,
  FETCH_STAFFS_SUCCESS,
  ATTEMPT_LOGIN,
  LOGOUT,
  LOGIN_FAILED,
  FETCH_BENEFITS_SUCCESS,
  FETCH_BENEFITS_HISTORYS_SUCCESS,
  FETCH_POSITIONS_SUCCESS,
  FETCH_CANDIDATS_SUCCESS,
  FETCHED_BENEFITS_HISTORYS,
  GET_POSITION_SUCCEED,
  GET_USER_SUCCEED,
  GET_CANDIDAT_SUCCEED
} from "../actions";
import { GET_BENEFIT_SUCCEED } from "../actions/actions-benefits";

const initialState = {
  user: {},
  loadingUser: false,
  errorUser: false,
  users: [],
  loadingUsers: true,
  benefits: [],
  loadingBenefits: true,
  benefitsHistorys: [],
  loadingBenefitsHistorys: true,
  positions: [],
  loadingPositions: true,
  candidats: [],
  loadingCandidats: true,
  openPosition: {},
  userAbout: {},
  candidat: {},
  benefit: {}
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
        users: action.payload.users.results,
        usersCount: action.payload.count,
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
        usersCount: null,
        loadingUsers: true,
        benefits: [],
        benefitsHistorys: [],
        loadingBenefitsHistorys: true,
        positions: [],
        loadingPositions: true,
        candidats: [],
        loadingCandidats: true
      };
    case FETCH_BENEFITS_SUCCESS:
      return {
        ...state,
        benefits: action.payload,
        loadingBenefits: false
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
    case FETCH_POSITIONS_SUCCESS:
      return {
        ...state,
        positions: action.payload,
        loadingPositions: false
      };
    case FETCH_CANDIDATS_SUCCESS:
      return {
        ...state,
        candidats: action.payload,
        loadingCandidats: false
      };
    case GET_POSITION_SUCCEED:
      return {
        ...state,
        openPosition: action.payload
      };
    case GET_USER_SUCCEED:
      return {
        ...state,
        userAbout: action.payload
      };
    case GET_CANDIDAT_SUCCEED:
      return {
        ...state,
        candidat: action.payload
      };
    case GET_BENEFIT_SUCCEED:
      return {
        ...state,
        benefit: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
