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
  const title = useInputValue();
  const description = useInputValue();
  const ageLimit = useInputValue();
  const salary = useInputValue();
  const gender = useInputValue();

  const handleAddOpenPosition = e => {
    e.preventDefault();

    if (
      title.value().trim() &&
      description.value().trim() &&
      ageLimit.value().trim() &&
      salary.value().trim() &&
      gender.value().trim()
    ) {
      addedPosition({
        title: title.value(),
        description: description.value(),
        ageLimit: ageLimit.value(),
        salary: salary.value(),
        gender: gender.value()
      });
    }
    title.clear();
    description.clear();
    ageLimit.clear();
    salary.clear();
    gender.clear();
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
          <h3>Open Position About</h3>
        </div>

        <form onSubmit={handleAddOpenPosition}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              placeholder="Title"
              {...title.bind}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              placeholder="Description"
              {...description.bind}
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Age limit</label>
              <input
                className="form-control"
                placeholder="Age limit"
                {...ageLimit.bind}
                type="ageLimit"
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
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="exampleFormControlSelect1">Select Gender</label>
              <select
                {...gender.bind}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="" style={{ display: "none" }}>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
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
