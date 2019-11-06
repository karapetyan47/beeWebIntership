import React from "react";
import Dashboard from "components/dashboard";
import Staff from "components/staff";
import Attendance from "components/attendance";
import Benefits from "components/benefits";
import OpenPossitions from "components/open-possitions";
import Candidates from "components/candidates";
import Tickets from "components/tickets";
import PushNotifications from "components/push-notifications";
import Rating from "components/rating";
import AdminTools from "components/admin-tools";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { MAIN_PATH } from "constants/const-paths/paths";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./admin-panel.scss";

const AdminPanel = ({ isLoggedIn, user, url }) => {
  if (isLoggedIn) {
    return (
      <div>
        <div className="admin-about">
          <label>{user}</label>
        </div>
        <Router>
          <div className="left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <AdminTools url={url} />
          </div>
          <div className="visible-place">
            <Route path="/secret" exact component={Dashboard} />
            <Route path={`${url}/staff`} component={Staff} />
            <Route path={`${url}/attendance`} component={Attendance} />
            <Route path={`${url}/benefits`} component={Benefits} />
            <Route path={`${url}/open-possitions`} component={OpenPossitions} />
            <Route path={`${url}/candidates`} component={Candidates} />
            <Route path={`${url}/tickets`} component={Tickets} />
            <Route
              path={`${url}/push-notifications`}
              component={PushNotifications}
            />
            <Route path={`${url}/rating`} component={Rating} />
          </div>
        </Router>
      </div>
    );
  }

  return <Redirect to={MAIN_PATH} />;
};

const mapStateToProps = ({ isLoggedIn, user }) => {
  return {
    isLoggedIn,
    user
  };
};

export default connect(mapStateToProps)(AdminPanel);
