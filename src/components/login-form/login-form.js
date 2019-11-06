import React from "react";
import classNames from "classnames/bind";
import { inputLabel, inputFalse } from "constants/const-styles/styles.js";

import "./login-form.scss";

const styles = {
  inputLabel,
  inputFalse
};

let cx = classNames.bind(styles);

const LoginForm = ({ name, submit, password, error }) => {
  let className = cx("inputLabel", { inputFalse: error });
  return (
    <div className="login-section">
      <div className="box">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={submit}>
          <div className="inputBox">
            <input type="text" required="" {...name.bind} />
            <label className={className}>Username</label>
          </div>
          <div className="inputBox">
            <input type="password" required="" {...password.bind} />
            <label className={className}>Password</label>
          </div>
          <button className="login-btn" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
