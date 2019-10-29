import { 
  FETCHED_USERS,
  FETCH_USERS_SUCCESS, 
  USER_LOGGED_IN } from '../../constants/const-actions/action-types';

const usersLoaded = (newUsers) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: newUsers
    };
  };

const userLoggedIn= () =>{
    return {
        type: USER_LOGGED_IN
    }
}

const fetchUsers = () => {
    return { 
      type: FETCHED_USERS 
    }
  };

export {
    userLoggedIn,
    usersLoaded,
    fetchUsers
}