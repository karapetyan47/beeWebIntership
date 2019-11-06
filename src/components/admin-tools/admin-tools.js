import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./admin-tools.scss";

export default class AdminTools extends Component {
  render() {
    const { url } = this.props;
    return (
      <ul>
        <Link to="/secret" style={{ textDecoration: "none" }}>
          <li>
            <i className="fas fa-chart-line"></i>Dashboard
          </li>
        </Link>
        <Link to={`${url}/staff`} style={{ textDecoration: "none" }}>
          <li>
            <i class="fas fa-street-view"></i>Staff
          </li>
        </Link>
        <Link to={`${url}/attendance`} style={{ textDecoration: "none" }}>
          <li>
            <i class="far fa-clipboard"></i>Attendance
          </li>
        </Link>
        <Link to={`${url}/benefits`} style={{ textDecoration: "none" }}>
          <li>
            <i class="fas fa-coins"></i>Benefits
          </li>
        </Link>
        <Link to={`${url}/open-possitions`} style={{ textDecoration: "none" }}>
          <li>
            <i class="fas fa-book-reader"></i>Open Positions
          </li>
        </Link>
        <Link to={`${url}/candidates`} style={{ textDecoration: "none" }}>
          <li>
            <i class="fas fa-users"></i>Candidates
          </li>
        </Link>
        <Link to={`${url}/tickets`} style={{ textDecoration: "none" }}>
          <li>
            <i class="fas fa-ticket-alt"></i>Tickets
          </li>
        </Link>
        <Link
          to={`${url}/push-notifications`}
          style={{ textDecoration: "none" }}
        >
          <li>
            <i class="fas fa-bell"></i>Push Notification
          </li>
        </Link>
        <Link to={`${url}/rating`} style={{ textDecoration: "none" }}>
          <li>
            <i class="fas fa-star-half-alt"></i>Rating
          </li>
        </Link>
      </ul>
    );
  }
}
