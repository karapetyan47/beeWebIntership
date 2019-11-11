import {
  USER_LOGGED_IN,
  FETCH_USERS_SUCCESS,
  FETCH_STAFFS_SUCCESS,
  REMOVED_STAFF,
  ADD_STAFF,
  EDIT_STAFF
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

    case ADD_STAFF:
      return {
        ...state,
        staffs: [...state.staffs, action.payload]
      };

    case REMOVED_STAFF:
      const staffId = action.payload;
      const itemIndex = state.staffs.findIndex(({ id }) => id === staffId);
      return {
        ...state,
        staffs: [
          ...state.staffs.slice(0, itemIndex),
          ...state.staffs.slice(itemIndex + 1)
        ]
      };

    case EDIT_STAFF:
      const editStaffId = action.payload.id;
      const editItemIndex = state.staffs.findIndex(
        ({ id }) => id === editStaffId
      );
      const editName = action.payload.name;
      const editValue = action.payload.value;

      return {
        ...state,
        staffs: [
          ...state.staffs.slice(0, editItemIndex),
          { [editName]: editValue },
          ...state.staffs.slice(editItemIndex + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
