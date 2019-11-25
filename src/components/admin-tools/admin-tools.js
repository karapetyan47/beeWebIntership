import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  LOGIN_PATH,
  STAFF,
  ATTENDANCE,
  BENEFITS,
  OPEN_POSSITIONS,
  CANDIDATES,
  TICKETS,
  RATING,
  MAIN_PATH
} from "../../constants/const-paths/paths";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions";
import { Redirect } from "react-router-dom";
import "./admin-tools.scss";
import setAuterizationToken from "../../utils/setAutorizationToken";

class AdminTools extends Component {
  logout = () => {
    localStorage.removeItem("jwtToken");
    setAuterizationToken(localStorage.jwtToken);
    this.props.logOut();
  };

  render() {
    return !localStorage.jwtToken ? (
      <Redirect to={LOGIN_PATH} />
    ) : (
      <ul>
        <Link to={MAIN_PATH} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-chart-line"></i>Dashboard
          </li>
        </Link>
        <Link to={STAFF} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-street-view"></i>Staff
          </li>
        </Link>
        <Link to={ATTENDANCE} style={{ textDecoration: "none" }}>
          <li>
            <i className="far fa-clipboard"></i>Attendance
          </li>
        </Link>
        <Link to={`${BENEFITS}/history`} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-coins"></i>Benefits
          </li>
        </Link>
        <Link to={OPEN_POSSITIONS} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-book-reader"></i>Open Positions
          </li>
        </Link>
        <Link to={CANDIDATES} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-users"></i>Candidates
          </li>
        </Link>
        <Link to={TICKETS} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-ticket-alt"></i>Tickets
          </li>
        </Link>

        <Link to={RATING} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-star-half-alt"></i>Rating
          </li>
        </Link>
        <Link to={LOGIN_PATH}>
          <button className="log-out" onClick={this.logout}>
            <i className="fas fa-sign-out-alt fa-2x"></i>Log out
          </button>
        </Link>
      </ul>
    );
  }
}

const mapDispatchToProps = {
  logOut
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AdminTools)
);
