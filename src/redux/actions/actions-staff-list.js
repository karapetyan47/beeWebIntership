export const FETCH_STAFFS_SUCCESS = "FETCH_STAFFS_SUCCESS";
export const FETCHED_STAFFS = "FETCHED_STAFFS";
export const REMOVED_USER = "REMOVED_USER";
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_STAFF";

const fetchUsersSuccess = newStaffs => {
  return {
    type: FETCH_STAFFS_SUCCESS,
    payload: newStaffs
  };
};

const removedUser = staffId => {
  return {
    type: REMOVED_USER,
    payload: staffId
  };
};
// const removedUserFaild = (e)=>{
//   return {
//     type:
//   }
// }

const editUser = payload => {
  return {
    type: EDIT_USER,
    payload: payload
  };
};

const addedUser = newStaff => {
  return {
    type: ADD_USER,
    payload: newStaff
  };
};

const fetchStaffs = () => {
  return {
    type: FETCHED_STAFFS
  };
};

export { fetchUsersSuccess, removedUser, fetchStaffs, addedUser, editUser };
