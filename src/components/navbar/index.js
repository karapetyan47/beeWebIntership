import React from "react";
import { connect } from "react-redux";
import AdminTools from "../../components/admin-tools";
import { PUSH_NOTIFICATIONS } from "../../constants/const-paths/paths";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = ({ user }) => {
  return (
    <div>
      <div className="admin-about">
        <div className="search">
          <input value="" placeholder="Search" onChange={() => {}} />
          <i className="fas fa-search"></i>
        </div>
        <div>
          <Link to={PUSH_NOTIFICATIONS} style={{ textDecoration: "none" }}>
            <i className="fas fa-bell"></i>
          </Link>

          <label>{user.firstname}</label>
        </div>
      </div>

      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <AdminTools />
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(
  mapStateToProps,
  null
)(Navbar);
