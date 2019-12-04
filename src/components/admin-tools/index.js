import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
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
import { connect } from "react-redux";
import { logOut } from "../../redux/actions";

import "./admin-tools.scss";
import setAuterizationToken from "../../utils/setAutorizationToken";

class AdminTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePathName: MAIN_PATH
    };
  }
  logout = () => {
    localStorage.removeItem("jwtToken");
    setAuterizationToken(localStorage.jwtToken);
    this.props.logOut();
    this.props.history.push(LOGIN_PATH);
  };

  componentDidMount() {
    const {
      location: { pathname }
    } = this.props;
    if (pathname.includes(STAFF)) {
      this.setState({ activePathName: STAFF });
    } else if (pathname.includes(ATTENDANCE)) {
      this.setState({ activePathName: ATTENDANCE });
    } else if (pathname.includes(BENEFITS)) {
      this.setState({ activePathName: BENEFITS });
    } else if (pathname.includes(OPEN_POSSITIONS)) {
      this.setState({ activePathName: OPEN_POSSITIONS });
    } else if (pathname.includes(CANDIDATES)) {
      this.setState({ activePathName: CANDIDATES });
    } else if (pathname.includes(TICKETS)) {
      this.setState({ activePathName: TICKETS });
    } else if (pathname.includes(RATING)) {
      this.setState({ activePathName: RATING });
    }
  }

  selectTool = prop => {
    this.setState({
      activePathName: prop
    });
  };

  tools = [
    { to: MAIN_PATH, name: "Dashboard", icon: "fas fa-chart-line" },
    { to: STAFF, name: "Staff", icon: "fas fa-street-view" },
    { to: ATTENDANCE, name: "Attendance", icon: "far fa-clipboard" },
    { to: `${BENEFITS}/history`, name: "Benefits", icon: "fas fa-coins" },
    { to: OPEN_POSSITIONS, name: "Open positions", icon: "fas fa-book-reader" },
    { to: CANDIDATES, name: "Candidats", icon: "fas fa-users" },
    { to: TICKETS, name: "Tickets", icon: "fas fa-ticket-alt" },
    { to: RATING, name: "Rating", icon: "fas fa-star-half-alt" }
  ];

  render() {
    const { activePathName } = this.state;
    return (
      <ul>
        {this.tools.map((x, i) => {
          return (
            <Link to={x.to} style={{ textDecoration: "none" }} key={i}>
              <li
                onClick={() => this.selectTool(x.to)}
                className={activePathName === x.to ? "active" : ""}
              >
                <i className={x.icon}></i>
                {x.name}
              </li>
            </Link>
          );
        })}

        <Link to={LOGIN_PATH}>
          <button className="log-out" onClick={this.logout}>
            <i className="fas fa-sign-out-alt fa-2x"></i>Log out
          </button>
        </Link>
      </ul>
    );
  }
}

const mapDispatchToProps = {
  logOut
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(AdminTools));
