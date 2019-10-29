const usersLoaded = (newUsers) => {
    return {
      type: 'FETCH_USERS_SUCCESS',
      payload: newUsers
    };
  };


const userLoggedIn= () =>{
    return {
        type: 'USER_LOGGED_IN'
    }
}

const fetchUsers = () => {
    return { type: 'FETCHED_USERS' }
  };

export {
    userLoggedIn,
    usersLoaded,
    fetchUsers
}