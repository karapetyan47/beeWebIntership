import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { MAIN_PATH } from "constants/const-paths/paths";

import "./admin-panel.scss";

const AdminPanel = ({ isLoggedIn, users }) => {
  if (isLoggedIn) {
    return (
      <div>
        <div className="left">
          <div className="admin-about">
            {/* <img src=""/> */}
            <label>{users[0].name}</label>
          </div>
          <ul>
            <li>Dashboard</li>
            <li>Staff</li>
            <li>Attendance</li>
            <li>Benefits</li>
            <li>Open Positions</li>
            <li>Candidates</li>
            <li>Tickets</li>
            <li>Push Notification</li>
            <li>Rating</li>
          </ul>
        </div>
        <div className="test">Welcome</div>
      </div>
    );
  }

  return <Redirect to={MAIN_PATH} />;
};

const mapStateToProps = ({ isLoggedIn, users }) => {
  return {
    isLoggedIn,
    users
  };
};

export default connect(mapStateToProps)(AdminPanel);
