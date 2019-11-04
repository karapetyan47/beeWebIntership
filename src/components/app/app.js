import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "redux/store";

import LoginFormContainer from "containers/login-form-container";
import AdminPanel from "components/admin-panel";
import Dashboard from "components/dashboard";
import Staff from "components/staff";
import Attendance from "components/attendance";
import Benefits from "components/benefits";
import OpenPossitions from "components/open-possitions";
import Candidates from "components/candidates";
import Tickets from "components/tickets";
import PushNotifications from "components/push-notifications";
import Rating from "components/rating";
import { MAIN_PATH, SECRET_PAGE_PATH } from "constants/const-paths/paths";

import "./app.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path={MAIN_PATH} component={LoginFormContainer} exact />
        <Route
          path={SECRET_PAGE_PATH}
          render={() => {
            return (
              <AdminPanel>
                <Dashboard />
                <Staff />
                <Attendance />
                <Benefits />
                <OpenPossitions />
                <Candidates />
                <Tickets />
                <PushNotifications />
                <Rating />
              </AdminPanel>
            );
          }}
        />
      </Router>
    </Provider>
  );
};

export default App;
