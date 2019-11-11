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
import {
  MAIN_PATH,
  SECRET_PAGE_PATH,
  STAFF,
  ATTENDANCE,
  BENEFITS,
  OPEN_POSSITIONS,
  CANDIDATES,
  TICKETS,
  PUSH_NOTIFICATIONS,
  RATING
} from "constants/const-paths/paths";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import "./admin-panel.scss";
import BenefitsHistory from "../benefits/benefits-history";

const AdminPanel = ({ isLoggedIn, user, url }) => {
  if (isLoggedIn) {
    return (
      <div className="back">
        <Router>
          <div className="admin-about">
            <div className="search">
              <input value="" placeholder="Search" onChange={() => {}} />
              <i className="fas fa-search"></i>
            </div>
            <div>
              <Link
                to={`${url}${PUSH_NOTIFICATIONS}`}
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-bell"></i>
              </Link>
              <label>{user}</label>
            </div>
          </div>

          <div className="left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <AdminTools url={url} />
          </div>
          <div className="visible-place">
            <Route path={SECRET_PAGE_PATH} exact component={Dashboard} />
            <Route path={`${url}${STAFF}`} component={Staff} />
            <Route path={`${url}${ATTENDANCE}`} component={Attendance} />
            <Route
              path={`${url}${BENEFITS}`}
              exact
              render={() => <Benefits url={`${url}${BENEFITS}`} />}
            />
            <Route
              path={`${url}${BENEFITS}/history`}
              render={() => <BenefitsHistory url={`${url}${BENEFITS}`} />}
              exact
            />
            <Route
              path={`${url}${OPEN_POSSITIONS}`}
              component={OpenPossitions}
            />
            <Route path={`${url}${CANDIDATES}`} component={Candidates} />
            <Route path={`${url}${TICKETS}`} component={Tickets} />
            <Route
              path={`${url}${PUSH_NOTIFICATIONS}`}
              component={PushNotifications}
            />
            <Route path={`${url}${RATING}`} component={Rating} />
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
