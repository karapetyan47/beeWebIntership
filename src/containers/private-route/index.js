import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute = props => (
  <Fragment>
    {localStorage.jwtToken ? props.children : <Redirect to="/" />}
  </Fragment>
);

export default PrivateRoute;
