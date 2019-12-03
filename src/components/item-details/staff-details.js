import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions";

import "./details.scss";
import { STAFF } from "../../constants/const-paths/paths";

const StaffDetails = ({ match, getUser, userAbout }) => {
  const id = match.params.id;
  useEffect(() => {
    getUser(id);
  }, [getUser, id]);
  console.log("id", id);
  const keys = [
    {
      name: "Name",
      prop: "firstname",
      type: "text"
    },
    {
      name: "Surname",
      prop: "lastname",
      type: "text"
    },
    {
      name: "Email",
      prop: "email",
      type: "email"
    },
    {
      name: "Salary",
      prop: "salary",
      type: "number"
    },
    {
      name: "Birthday",
      prop: "birthday",
      type: "date"
    },
    {
      name: "Phone number",
      prop: "phoneNumber",
      type: "number"
    }
  ];

  return (
    <div>
      <Link to={STAFF} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>

      <div className="shadow p-3 mb-5 bg-white rounded content">
        {userAbout ? (
          Object.keys(userAbout).length ? (
            <div>
              {keys.map((x, i) => {
                return (
                  <div key={i} className="op-detail">
                    {x.name}: {userAbout[x.prop]}
                  </div>
                );
              })}
            </div>
          ) : (
            <span>Bzz~~</span>
          )
        ) : (
          <span>Bzz~~</span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ userAbout }) => {
  return {
    userAbout
  };
};

const mapDispatchToProps = {
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StaffDetails));
