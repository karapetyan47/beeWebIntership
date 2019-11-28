import React from "react";
import Dashboard from "components/dashboard";
import Staff from "components/staff";
import Attendance from "components/attendance";
import Benefits from "components/benefits";
import BenefitsHistory from "../benefits/benefits-history";
import AddBenefit from "../benefits/add-benefit";
import AddStaff from "../staff/add-staff";
import OpenPositions from "components/open-positions";
import Candidats from "components/candidats";
import Tickets from "components/tickets";
import PushNotifications from "components/push-notifications";
import Rating from "components/rating";
import LoggedInLayout from "../../containers/loggedin-layout";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "redux/store";

import LoginFormContainer from "containers/login-form-container";

import {
  MAIN_PATH,
  STAFF,
  ATTENDANCE,
  BENEFITS,
  OPEN_POSSITIONS,
  CANDIDATES,
  TICKETS,
  PUSH_NOTIFICATIONS,
  RATING,
  LOGIN_PATH,
  POSSITIONS
} from "constants/const-paths/paths";

import "./app.scss";
import GuestLayout from "../../containers/guest-layout";
import GuestPageHeader from "../guest-page-header";
import Possitions from "../possitions";
import AddBenefitsHistory from "../benefits/benefits-history/add-bh";
import AddOpenPosition from "../open-positions/add-op";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GuestLayout>
          <GuestPageHeader />
          <Route path={LOGIN_PATH} component={LoginFormContainer} exact />
          <Route path={`${POSSITIONS}`} component={Possitions} />
        </GuestLayout>

        <LoggedInLayout>
          <Switch>
            <Route path={MAIN_PATH} exact component={Dashboard} />
            <Route path={STAFF} exact component={Staff} />
            <Route path={`${STAFF}/add`} component={AddStaff} />
            <Route path={ATTENDANCE} component={Attendance} />
            <Route path={BENEFITS} exact component={Benefits} />
            <Route
              path={`${BENEFITS}/history`}
              component={BenefitsHistory}
              exact
            />
            <Route
              path={`${BENEFITS}/history/add`}
              component={AddBenefitsHistory}
              exact
            />
            <Route path={`${BENEFITS}/add`} component={AddBenefit} exact />
            <Route path={OPEN_POSSITIONS} component={OpenPositions} exact />
            <Route
              path={`${OPEN_POSSITIONS}/add`}
              component={AddOpenPosition}
            />
            <Route path={CANDIDATES} component={Candidats} />
            <Route path={TICKETS} component={Tickets} />
            <Route path={PUSH_NOTIFICATIONS} component={PushNotifications} />
            <Route path={RATING} component={Rating} />
          </Switch>
        </LoggedInLayout>
      </Router>
    </Provider>
  );
};

export default App;
