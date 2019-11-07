export const FETCH_STAFFS_SUCCESS = "FETCH_STAFFS_SUCCESS";
export const FETCHED_STAFFS = "FETCHED_STAFFS";
export const REMOVED_STAFF = "REMOVED_STAFF";
export const ADD_STAFF = "ADD_STAFF";

const staffsLoaded = newStaffs => {
  return {
    type: FETCH_STAFFS_SUCCESS,
    payload: newStaffs
  };
};

const removedStaff = staffId => {
  return {
    type: REMOVED_STAFF,
    payload: staffId
  };
};

const addStaff = newStaff => {
  return {
    type: ADD_STAFF,
    payload: newStaff
  };
};

const fetchStaffs = () => {
  return {
    type: FETCHED_STAFFS
  };
};

export { staffsLoaded, removedStaff, fetchStaffs, addStaff };
