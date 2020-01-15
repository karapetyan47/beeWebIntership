import React, { useEffect } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchMe } from "../../redux/actions";
import {
  LOGIN_PATH,
  STAFF,
  ATTENDANCE,
  BENEFITS,
  OPEN_POSSITIONS,
  CANDIDATES,
  TICKETS,
  RATING,
  MAIN_PATH,
  OPEN_POSSITION_ID
} from "../../constants/const-paths/paths";

import LoggedInPage from "../../components/logged-in-page";

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
  `${BENEFITS}/add`,
  OPEN_POSSITION_ID
];

const LoggedInLayout = props => {
  const { loadingUser, location, history, user, fetchMe } = props;
  useEffect(() => {
    if (localStorage.jwtToken && !Object.keys(user).length) {
      fetchMe();
    }
  }, [fetchMe, user]);

  const checkRouting = () => {
    if (
      PRIVATE_ROUTES.includes(location.pathname) &&
      !location.pathname.includes(OPEN_POSSITION_ID)
    ) {
      history.push(LOGIN_PATH);
    }
  };

  return (
    <div className="back">
      {localStorage.jwtToken ? (
        loadingUser ? (
          <p>...loading</p>
        ) : (
          <LoggedInPage>{props.children}</LoggedInPage>
        )
      ) : (
        checkRouting()
      )}
    </div>
  );
};

const mapStateToProps = ({ loadingUser, user }) => {
  return { loadingUser, user };
};

const mapDispatchToProps = {
  fetchMe
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoggedInLayout));
