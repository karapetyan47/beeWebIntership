import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedUser, addUser, editUser } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./staff.scss";

class Staff extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.users !== this.props.users) this.props.fetchStaffs();
  // }

  render() {
    return (
      <div>
        <Link to={`${this.props.url}/add`} style={{ textDecoration: "none" }}>
          <button className="btn btn-success">Add User</button>
        </Link>
        <Table
          data={this.props.users}
          header={[
            {
              name: "Name",
              prop: "firstName"
            },
            {
              name: "Surname",
              prop: "lastName"
            },
            {
              name: "Email",
              prop: "email"
            },
            {
              name: "Role",
              prop: "role"
            },
            {
              name: "Birthday",
              prop: "birthday"
            },
            {
              name: "Phone number",
              prop: "phoneNumber"
            }
          ]}
          deleteItem={id => {
            console.log(id);
            this.props.removedUser(id);
          }}
          updateItem={(name, value, id) =>
            this.staffServices.editUser({ name, value, id })
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

const mapDispatchToProps = {
  fetchStaffs,
  removedUser,
  addUser,
  editUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
