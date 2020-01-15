import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addedUser } from "../../redux/actions/index";

import "./add-staff.scss";
import { STAFF } from "../../constants/const-paths/paths";
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

const AddStaff = ({ addedUser }) => {
  const firstName = useInputValue();
  const lastName = useInputValue();
  const email = useInputValue();
  const role = useInputValue();
  const salary = useInputValue();
  const birthday = useInputValue();
  const phoneNumber = useInputValue();
  const password = useInputValue();
  const repeatPassword = useInputValue();

  //Errors
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [salaryError, setSalaryError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const validate = () => {
    let salaryError = "";
    let birthdayError = "";
    let emailError = "";
    let phoneNumberError = "";
    let passwordError = "";
    let repeatPasswordError = "";
    let firstNameError = "";
    let lastNameError = "";
    let roleError = "";
    if (
      !email.value().includes("@") ||
      !email.value().includes(".") ||
      email.value().length < 6
    ) {
      emailError = "invalid email";
    }
    if (!firstName.value()) {
      firstNameError = "Name cannot be blank";
    }
    if (!lastName.value()) {
      lastNameError = "Surname cannot be blank";
    }
    if (!role.value()) {
      roleError = "Role cannot be blank";
    }
    if (!salary.value()) {
      salaryError = "Salary cannot be blank";
    }
    if (!birthday.value()) {
      birthdayError = "Birthday cannot be blank";
    }
    if (!email.value()) {
      emailError = "Email cannot be blank";
    }
    if (!phoneNumber.value()) {
      phoneNumberError = "PhoneNumber cannot be blank";
    }

    if (!password.value()) {
      passwordError = "password cannot be blank";
    }
    if (!repeatPassword.value()) {
      repeatPasswordError = "repeatPassword cannot be blank";
    }
    if (repeatPassword.value() !== password.value()) {
      repeatPasswordError = "field is wrong";
    }
    if (
      emailError ||
      salaryError ||
      birthdayError ||
      phoneNumberError ||
      passwordError ||
      repeatPasswordError ||
      firstNameError ||
      lastNameError ||
      roleError
    ) {
      setEmailError(emailError);
      setSalaryError(salaryError);
      setBirthdayError(birthdayError);
      setPhoneNumberError(phoneNumberError);
      setPasswordError(passwordError);
      setRepeatPasswordError(repeatPasswordError);
      setFirstNameError(firstNameError);
      setLastNameError(lastNameError);
      setRoleError(roleError);
      return false;
    }
    return true;
  };

  const handleAddStaff = e => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      addedUser({
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
      <Link to={STAFF} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <div className="shadow p-3 mb-5 bg-white rounded content">
        <div className="h3">
          <h3>Staff About</h3>
        </div>

        <form onSubmit={handleAddStaff}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                className="form-control"
                placeholder="Name"
                {...firstName.bind}
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {firstNameError}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label>Surname</label>
              <input
                className="form-control"
                placeholder="Surname"
                {...lastName.bind}
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {lastNameError}
              </div>
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
            <div style={{ color: "red", fontSize: "12px" }}>{emailError}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Role</label>
              <input
                className="form-control"
                placeholder="Role"
                {...role.bind}
              />
              <div style={{ color: "red", fontSize: "12px" }}>{roleError}</div>
            </div>
            <div className="form-group col-md-6">
              <label>Salary</label>
              <input
                className="form-control"
                placeholder="Salary"
                {...salary.bind}
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {salaryError}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label>Birthday</label>
              <input
                className="form-control"
                placeholder="Birthday"
                {...birthday.bind}
                type="date"
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {birthdayError}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label>Phone number</label>
              <input
                className="form-control"
                placeholder="Phone number"
                {...phoneNumber.bind}
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {phoneNumberError}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                className="form-control"
                placeholder="Password"
                {...password.bind}
                type="password"
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {passwordError}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label>Repeat password</label>
              <input
                className="form-control"
                placeholder="Repeat password"
                {...repeatPassword.bind}
                type="password"
              />
              <div style={{ color: "red", fontSize: "12px" }}>
                {repeatPasswordError}
              </div>
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
  addedUser
};

export default connect(
  null,
  mapDispatchToProps
)(AddStaff);
