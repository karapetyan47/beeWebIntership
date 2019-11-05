import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./admin-tools.scss";

export default class AdminTools extends Component {
  render() {
    return (
      <ul>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li>Dashboard</li>
        </Link>
        <Link to="/staff" style={{ textDecoration: "none" }}>
          <li>Staff</li>
        </Link>
        <Link to="/attendance" style={{ textDecoration: "none" }}>
          <li>Attendance</li>
        </Link>
        <Link to="/benefits" style={{ textDecoration: "none" }}>
          <li>Benefits</li>
        </Link>
        <Link to="/open-possitions" style={{ textDecoration: "none" }}>
          <li>Open Positions</li>
        </Link>
        <Link to="/candidates" style={{ textDecoration: "none" }}>
          <li>Candidates</li>
        </Link>
        <Link to="/tickets" style={{ textDecoration: "none" }}>
          <li>Tickets</li>
        </Link>
        <Link to="/push-notifications" style={{ textDecoration: "none" }}>
          <li>Push Notification</li>
        </Link>
        <Link to="/rating" style={{ textDecoration: "none" }}>
          <li>Rating</li>
        </Link>
      </ul>
    );
  }
}
