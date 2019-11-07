export const FETCH_STAFFS_SUCCESS = "FETCH_STAFFS_SUCCESS";
export const FETCHED_STAFFS = "FETCHED_STAFFS";
export const REMOVED_STAFF = "REMOVED_STAFF";

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

const fetchStaffs = () => {
  return {
    type: FETCHED_STAFFS
  };
};

export { staffsLoaded, removedStaff, fetchStaffs };
