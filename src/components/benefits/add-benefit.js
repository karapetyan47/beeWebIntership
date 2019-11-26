import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addedBenefit } from "../../redux/actions/index";

import "./benefits.scss";
import { BENEFITS } from "../../constants/const-paths/paths";

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

const AddBenefit = ({ addedBenefit }) => {
  const title = useInputValue();
  const description = useInputValue();

  const handleAddBenefit = e => {
    e.preventDefault();

    if (title.value().trim() && description.value().trim()) {
      console.log(title.value(), description.value());
      addedBenefit({
        title: title.value(),
        description: description.value()
      });
    }
    title.clear();
    description.clear();
  };

  return (
    <div>
      <Link to={BENEFITS} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <div className="shadow p-3 mb-5 bg-white rounded content">
        <div className="h3">
          <h3>New benefit</h3>
        </div>

        <form onSubmit={handleAddBenefit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              placeholder="Name"
              {...title.bind}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              placeholder="Surname"
              {...description.bind}
            />
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
  addedBenefit
};

export default connect(
  null,
  mapDispatchToProps
)(AddBenefit);
