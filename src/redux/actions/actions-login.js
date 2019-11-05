export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const FETCHED_USERS = "FETCHED_USERS";

const usersLoaded = newUsers => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: newUsers
  };
};

const userLoggedIn = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user
  };
};

const fetchUsers = () => {
  return {
    type: FETCHED_USERS
  };
};

export { userLoggedIn, usersLoaded, fetchUsers };
