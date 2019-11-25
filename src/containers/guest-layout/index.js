import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const GuestLayout = props => {
  const { loadingUser } = props;
  return (
    <div>
      {!localStorage.jwtToken ? (
        props.children
      ) : loadingUser ? (
        <p style={{ float: "right" }}>...Loading</p>
      ) : (
        <Redirect to="/" />
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
)(GuestLayout);
