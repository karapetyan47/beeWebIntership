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

import "./admin-panel.scss";

const AdminPanel = ({ isLoggedIn, user }) => {
  if (isLoggedIn) {
    return (
      <div>
        <Router>
          <div className="left">
            <div className="admin-about">
              {/* <img src=""/> */}
              <label>{user}</label>
            </div>
            <AdminTools />
          </div>
          <div className="visible-place">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/staff" component={Staff} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/open-possitions" component={OpenPossitions} />
            <Route path="/candidates" component={Candidates} />
            <Route path="/tickets" component={Tickets} />
            <Route path="/push-notifications" component={PushNotifications} />
            <Route path="/rating" component={Rating} />
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
