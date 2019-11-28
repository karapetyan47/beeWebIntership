import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addedPosition } from "../../redux/actions/index";

import "./add-op.scss";
import { OPEN_POSSITIONS } from "../../constants/const-paths/paths";
// import ValidateInput from "../validate-input";

const useInputValue = (resetError = () => {}, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  // const [isValid, setValid] = useState(false);

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

const AddOpenPosition = ({ addedPosition }) => {
  const firstName = useInputValue();
  const lastName = useInputValue();
  const email = useInputValue();
  const role = useInputValue();
  const salary = useInputValue();
  const birthday = useInputValue();
  const phoneNumber = useInputValue();
  const password = useInputValue();
  const repeatPassword = useInputValue();

  const handleAddOpenPosition = e => {
    e.preventDefault();

    if (
      firstName.value().trim() &&
      lastName.value().trim() &&
      email.value().trim() &&
      role.value().trim() &&
      salary.value().trim() &&
      birthday.value().trim() &&
      phoneNumber.value().trim() &&
      password.value().trim() &&
      repeatPassword.value().trim()
    ) {
      addedPosition({
        firstName: firstName.value(),
        lastName: lastName.value(),
        email: email.value(),
        role: role.value(),
        salary: salary.value(),
        birthday: birthday.value(),
        phoneNumber: phoneNumber.value(),
        password: password.value(),
        repeatPassword: repeatPassword.value()
      });
    }
    firstName.clear();
    lastName.clear();
    email.clear();
    role.clear();
    salary.clear();
    birthday.clear();
    phoneNumber.clear();
    password.clear();
    repeatPassword.clear();
  };

  return (
    <div>
      <Link to={OPEN_POSSITIONS} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <div className="shadow p-3 mb-5 bg-white rounded content">
        <div className="h3">
          <h3>OpenPosition About</h3>
        </div>

        <form onSubmit={handleAddOpenPosition}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                className="form-control"
                placeholder="Name"
                {...firstName.bind}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Surname</label>
              <input
                className="form-control"
                placeholder="Surname"
                {...lastName.bind}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              placeholder="Email"
              {...email.bind}
              type="email"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Role</label>
              <input
                className="form-control"
                placeholder="Role"
                {...role.bind}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Salary</label>
              <input
                className="form-control"
                placeholder="Salary"
                {...salary.bind}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Birthday</label>
              <input
                className="form-control"
                placeholder="Birthday"
                {...birthday.bind}
                type="date"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Phone number</label>
              <input
                className="form-control"
                placeholder="Phone number"
                {...phoneNumber.bind}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                className="form-control"
                placeholder="Password"
                {...password.bind}
                type="password"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Repeat password</label>
              <input
                className="form-control"
                placeholder="Repeat password"
                {...repeatPassword.bind}
                type="password"
              />
            </div>
          </div>
          <button className="btn btn-warning" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addedPosition
};

export default connect(
  null,
  mapDispatchToProps
)(AddOpenPosition);
