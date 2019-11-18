import React, { useState } from "react";
import { Link } from "react-router-dom";
import StaffServices from "../../services/staff-services";

import "./add-staff.scss";

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

const AddStaff = ({ onAddStaff, url }) => {
  const firstName = useInputValue();
  const lastName = useInputValue();
  const email = useInputValue();
  const role = useInputValue();
  const birthday = useInputValue();
  const phoneNumber = useInputValue();
  const password = useInputValue();
  const repeatPassword = useInputValue();

  const staffService = new StaffServices();

  const handleAddStaff = e => {
    e.preventDefault();

    if (
      firstName.value().trim() &&
      lastName.value().trim() &&
      email.value().trim() &&
      role.value().trim() &&
      birthday.value().trim() &&
      phoneNumber.value().trim() &&
      password.value().trim() &&
      repeatPassword.value().trim()
    ) {
      staffService.addUser({
        firstName: firstName.value(),
        lastName: lastName.value(),
        email: email.value(),
        role: role.value(),
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
    birthday.clear();
    phoneNumber.clear();
    password.clear();
    repeatPassword.clear();
  };

  return (
    <div>
      <Link to={url} style={{ textDecoration: "none" }}>
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
            </div>
            <div className="form-group col-md-6">
              <label>Surname</label>
              <input
                className="form-control"
                placeholder="Surname"
                {...lastName.bind}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                className="form-control"
                placeholder="Email"
                {...email.bind}
                type="email"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Role</label>
              <input
                className="form-control"
                placeholder="Role"
                {...role.bind}
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
                type="number"
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

export default AddStaff;
