export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const FETCH_ME = "FETCH_ME";

export const attemptLogin = user => {
  return {
    type: ATTEMPT_LOGIN,
    payload: user
  };
};

export const loginFailed = err => ({ type: LOGIN_FAILED, payload: { err } });

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const fetchMe = obj => {
  return {
    type: FETCH_ME,
    payload: obj
  };
};

export const logOut = () => ({ type: LOGOUT });
