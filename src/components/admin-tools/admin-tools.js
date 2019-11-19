import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  SECRET_PAGE_PATH,
  STAFF,
  ATTENDANCE,
  BENEFITS,
  OPEN_POSSITIONS,
  CANDIDATES,
  TICKETS,
  RATING
} from "constants/const-paths/paths";
import { MAIN_PATH } from "../../constants/const-paths/paths";

import "./admin-tools.scss";
import setAuterizationToken from "../../utils/setAutorizationToken";

class AdminTools extends Component {
  logOut = () => {
    console.log("logOut");
    localStorage.removeItem("jwtToken");
    setAuterizationToken(localStorage.jwtToken);

    this.props.history.push({ MAIN_PATH });
  };

  render() {
    const { url } = this.props;
    return (
      <ul>
        <Link to={SECRET_PAGE_PATH} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-chart-line"></i>Dashboard
          </li>
        </Link>
        <Link to={`${url}${STAFF}`} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-street-view"></i>Staff
          </li>
        </Link>
        <Link to={`${url}${ATTENDANCE}`} style={{ textDecoration: "none" }}>
          <li>
            <i className="far fa-clipboard"></i>Attendance
          </li>
        </Link>
        <Link to={`${url}${BENEFITS}`} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-coins"></i>Benefits
          </li>
        </Link>
        <Link
          to={`${url}${OPEN_POSSITIONS}`}
          style={{ textDecoration: "none" }}
        >
          <li>
            <i className="fas fa-book-reader"></i>Open Positions
          </li>
        </Link>
        <Link to={`${url}${CANDIDATES}`} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-users"></i>Candidates
          </li>
        </Link>
        <Link to={`${url}${TICKETS}`} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-ticket-alt"></i>Tickets
          </li>
        </Link>

        <Link to={`${url}${RATING}`} style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-star-half-alt"></i>Rating
          </li>
        </Link>
        <button className="log-out" onClick={this.logOut}>
          <i className="fas fa-sign-out-alt fa-2x"></i>Log out
        </button>
      </ul>
    );
  }
}

export default withRouter(AdminTools);
