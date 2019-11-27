import React from "react";
import Navbar from "../../components/navbar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

const PRIVATE_ROUTES = [
  STAFF,
  ATTENDANCE,
  BENEFITS,
  OPEN_POSSITIONS,
  CANDIDATES,
  TICKETS,
  RATING,
  MAIN_PATH,
  `${STAFF}/add`,
  `${BENEFITS}/history`,
  `${BENEFITS}/history/add`,
  `${BENEFITS}/add`
];

const LoggedInLayout = props => {
  const { loadingUser, location, history } = props;

  const checkRouting = () => {
    if (PRIVATE_ROUTES.includes(location.pathname)) {
      history.push(LOGIN_PATH);
    }
  };

  return (
    <div className="back">
      {localStorage.jwtToken ? (
        loadingUser ? (
          <p>...loading</p>
        ) : (
          <>
            <Navbar />
            <div className="visible-place">{props.children}</div>
          </>
        )
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
)(withRouter(LoggedInLayout));
