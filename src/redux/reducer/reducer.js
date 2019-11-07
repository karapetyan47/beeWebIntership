import {
  USER_LOGGED_IN,
  FETCH_USERS_SUCCESS,
  FETCH_STAFFS_SUCCESS,
  REMOVED_STAFF
} from "redux/actions";

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

    // case "BOOK_ADDED_TO_CART":
    //   return updateOrder(state, action.payload, 1);

    case REMOVED_STAFF:
      const { staffs } = state;
      const staffId = action.payload;
      const itemIndex = staffs.findIndex(({ id }) => id === staffId);
      return {
        ...state,
        staffs: [...staffs.slice(0, itemIndex), ...staffs.slice(itemIndex + 1)]
      };
    default:
      return state;
  }
};

export default reducer;
