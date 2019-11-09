import React, { Component } from "react";
import { Link } from "react-router-dom";
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

import "./admin-tools.scss";

export default class AdminTools extends Component {
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
      </ul>
    );
  }
}
