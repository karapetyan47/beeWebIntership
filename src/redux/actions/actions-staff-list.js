export const FETCH_STAFFS_SUCCESS = "FETCH_STAFFS_SUCCESS";
export const FETCHED_STAFFS = "FETCHED_STAFFS";

const staffsLoaded = newStaffs => {
  console.log(newStaffs);
  return {
    type: FETCH_STAFFS_SUCCESS,
    payload: newStaffs
  };
};

const fetchStaffs = () => {
  return {
    type: FETCHED_STAFFS
  };
};

export { staffsLoaded, fetchStaffs };
