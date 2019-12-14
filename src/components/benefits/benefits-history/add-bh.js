import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BENEFITS } from "../../../constants/const-paths/paths";
import {
  fetchBenefits,
  fetchStaffs,
  addedBenefitsHistory
} from "../../../redux/actions";

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

const AddBenefitsHistory = ({
  benefits,
  users,
  fetchStaffs,
  fetchBenefits,
  addedBenefitsHistory
}) => {
  const benefit = useInputValue();
  const user = useInputValue();

  //Errors
  const [benefitError, setBenefitError] = useState("");
  const [userError, setUserError] = useState("");

  const validate = () => {
    let benefitError = "";
    let userError = "";

    if (!benefit.value()) {
      benefitError = "Please select a benefit";
    }
    if (!user.value()) {
      userError = "Please select a user";
    }
    if (benefitError || userError) {
      setBenefitError(benefitError);
      setUserError(userError);

      return false;
    }
    return true;
  };

  useEffect(() => {
    fetchBenefits();
  }, [fetchBenefits]);
  useEffect(() => {
    fetchStaffs();
  }, [fetchStaffs]);

  const handleAddBenefitsHistory = e => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      addedBenefitsHistory({
        benefitId: benefit.value(),
        userId: user.value()
      });
    }
    benefit.clear();
    user.clear();
  };

  return (
    <>
      <Link
        to={`${BENEFITS}/history`}
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>
      <div className="shadow p-3 mb-5 bg-white rounded content">
        <div className="h3">
          <h3>New</h3>
        </div>
        <form onSubmit={handleAddBenefitsHistory}>
          <div className="form-group">
            <label>Benefit title</label>
            <select
              {...benefit.bind}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option value="" style={{ display: "none" }}>
                Select benefit
              </option>
              {benefits ? (
                benefits.map((x, i) => (
                  <option key={i} value={x._id}>
                    {x.title}
                  </option>
                ))
              ) : (
                <option value="">bzzz</option>
              )}
            </select>
            <div style={{ color: "red", fontSize: "12px" }}>{benefitError}</div>
          </div>
          <div className="form-group">
            <label>User name</label>
            <select
              {...user.bind}
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option value="" style={{ display: "none" }}>
                Select user
              </option>
              {users ? (
                users.map((x, i) => (
                  <option key={i} value={x._id}>
                    {x.firstname}
                  </option>
                ))
              ) : (
                <option value="">...bzzz</option>
              )}
            </select>
            <div style={{ color: "red", fontSize: "12px" }}>{userError}</div>
          </div>
          <button className="btn btn-warning" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = ({ benefits, users }) => {
  return {
    benefits,
    users
  };
};
const mapDispatchToProps = {
  fetchStaffs,
  fetchBenefits,
  addedBenefitsHistory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBenefitsHistory);
