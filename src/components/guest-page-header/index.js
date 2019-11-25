import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import { LOGIN_PATH, POSSITIONS } from "../../constants/const-paths/paths";
const GuestPageHeader = () => {
  return (
    <div className="guest-header">
      <h3>
        <span>BeeWeb</span>
      </h3>
      <div className="guest-header-list">
        <Link style={{ textDecoration: "none" }} to={LOGIN_PATH}>
          <button className="btn btn-success">Log In</button>
        </Link>

        <Link style={{ textDecoration: "none" }} to={POSSITIONS}>
          <button className="btn btn-success">Possitions</button>
        </Link>
      </div>
    </div>
  );
};

export default GuestPageHeader;
