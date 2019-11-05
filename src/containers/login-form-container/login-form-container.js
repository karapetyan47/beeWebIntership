import React, { useState, useEffect } from "react";
import LoginForm from "components/login-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLoggedIn, fetchUsers } from "redux/actions/actions-login";
import { SECRET_PAGE_PATH } from "constants/const-paths/paths";

const useInputValue = (resetError = () => {}, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: e => {
        resetError();
        setValue(e.target.value);
      }
    },
    clear: () => setValue(""),
    value: () => value
  };
};

const LoginFormContainer = ({
  isLoggedIn,
  users,
  userLoggedIn,
  fetchUsers
}) => {
  const name = useInputValue(resetError);
  const password = useInputValue(resetError);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function resetError() {
    setHasError(false);
  }

  if (isLoggedIn) {
    return <Redirect to={SECRET_PAGE_PATH} />;
  }

  const login = e => {
    e.preventDefault();
    let errorStatus = true;
    if (name.value().trim() && password.value().trim()) {
      const userList = users;
      for (let user = 0; user < userList.length; user++) {
        if (
          userList[user].name === name.value() &&
          userList[user].password === password.value()
        ) {
          errorStatus = false;
          userLoggedIn(userList[user].name);
          break;
        }
      }
    }
    errorStatus && setHasError(true);
    name.clear();
    password.clear();
  };

  return (
    <LoginForm
      submit={login}
      name={name}
      password={password}
      error={hasError}
    />
  );
};

const mapStateToProps = ({ users, isLoggedIn }) => {
  return {
    users,
    isLoggedIn
  };
};

const mapDispatchToProps = {
  userLoggedIn,
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
