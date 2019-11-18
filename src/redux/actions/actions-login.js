// export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

// export const FETCHED_USERS = "FETCHED_USERS";

// const usersLoaded = newUsers => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: newUsers
//   };
// };

export const attemptLogin = user => {
  return {
    type: ATTEMPT_LOGIN,
    payload: user
  };
};

export const loginFailed = err => ({ type: LOGIN_FAILED, payload: { err } });

// const fetchUsers = () => {
//   return {
//     type: FETCHED_USERS
//   };
// };

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const loginUser = data => {
  // return dispatch => {
  //   return axios({
  //     method: "post",
  //     url: "https://hr-service-beeweb.herokuapp.com/users/login",
  //     data: {
  //       email: data.email,
  //       password: data.password
  //     }
  //   }).then(res => {
  //     const token = res.data.token;
  //     localStorage.setItem("jwtToken", token);
  //     setAutheriztionToken(token);
  //     dispatch(userLoggedIn(jwt.decode(token)));
  //   });
  // };
};

// export { userLoggedIn, usersLoaded, fetchUsers, loginUser };
