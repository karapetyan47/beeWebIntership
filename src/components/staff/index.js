import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedUser, editUser } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./staff.scss";

class Staff extends Component {
  state = {
    editIdx: -1
  };

  componentDidMount() {
    this.props.fetchStaffs();
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.users !== this.props.users) this.props.fetchStaffs();
  // }

  startEditing = i => {
    this.setState({
      editIdx: i
    });
  };

  stopEditing = () => {
    this.setState({
      editIdx: -1
    });
  };

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
          updateItem={(title, value, id) =>
            // this.staffServices.editUser({ title, value, id })
            console.log("obj", title, value, id)
          }
          editIdx={this.state.editIdx}
          startEditing={this.startEditing}
          stopEditing={this.stopEditing}
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
  editUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
