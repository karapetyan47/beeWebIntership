export const FETCH_STAFFS_SUCCESS = "FETCH_STAFFS_SUCCESS";
export const FETCHED_STAFFS = "FETCHED_STAFFS";
export const REMOVED_USER = "REMOVED_USER";
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_STAFF";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCEED = "GET_USER_SUCCEED";

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

const fetchStaffs = page => {
  return {
    type: FETCHED_STAFFS,
    payload: page
  };
};
const getUser = id => {
  return {
    type: GET_USER,
    payload: id
  };
};

const getUserSucceed = obj => {
  return {
    type: GET_USER_SUCCEED,
    payload: obj
  };
};

export {
  fetchUsersSuccess,
  removedUser,
  fetchStaffs,
  addedUser,
  editUser,
  getUser,
  getUserSucceed
};
