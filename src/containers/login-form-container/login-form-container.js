import React, { useState } from "react";
import LoginForm from "components/login-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { attemptLogin } from "redux/actions/actions-login";
import { MAIN_PATH } from "../../constants/const-paths/paths";

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

const LoginFormContainer = ({ loginUser, loadingUser }) => {
  const email = useInputValue(resetError);
  const password = useInputValue(resetError);
  const [hasError, setHasError] = useState(false);

  function resetError() {
    setHasError(false);
  }

  if (localStorage.jwtToken) {
    return <Redirect to={MAIN_PATH} />;
  }

  const login = e => {
    e.preventDefault();
    let errorStatus = true;
    if (email.value().trim() && password.value().trim()) {
      const data = { email: email.value(), password: password.value() };
      errorStatus = false;
      loginUser(data);
    }
    errorStatus && setHasError(true);
    email.clear();
    password.clear();
  };

  return (
    <>
      {loadingUser ? (
        <p style={{ marginLeft: "50%", marginTop: "150px" }}>Bzz~~</p>
      ) : (
        <LoginForm
          submit={login}
          email={email}
          password={password}
          error={hasError}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ loadingUser }) => {
  return { loadingUser };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(attemptLogin(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
