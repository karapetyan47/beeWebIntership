import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  LOGIN_PATH,
  MAIN_PATH,
  POSSITIONS
} from "../../constants/const-paths/paths";

const PUBLIC_ROUTES = [LOGIN_PATH, POSSITIONS];

const GuestLayout = props => {
  const { loadingUser, location, history } = props;

  const checkRouting = () => {
    if (PUBLIC_ROUTES.includes(location.pathname)) {
      history.push(MAIN_PATH);
    }
  };

  return (
    <div>
      {!localStorage.jwtToken ? (
        props.children
      ) : loadingUser ? (
        <p style={{ float: "right" }}>...Loading</p>
      ) : (
        checkRouting()
      )}
    </div>
  );
};

const mapStateToProps = ({ loadingUser }) => {
  return { loadingUser };
};
export default connect(
  mapStateToProps,
  null
)(withRouter(GuestLayout));
