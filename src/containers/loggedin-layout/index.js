import React from "react";
import Navbar from "../../components/navbar";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LOGIN_PATH } from "../../constants/const-paths/paths";

const LoggedInLayout = props => {
  const { loadingUser } = props;
  return (
    <>
      <>
        {localStorage.jwtToken ? (
          loadingUser ? (
            <p>...loading</p>
          ) : (
            <>
              <Navbar />
              {props.children}
            </>
          )
        ) : (
          <Redirect to={LOGIN_PATH} />
        )}
      </>
    </>
  );
};

const mapStateToProps = ({ loadingUser }) => {
  return { loadingUser };
};

export default connect(
  mapStateToProps,
  null
)(LoggedInLayout);
