import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedUser, editUser } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./staff.scss";
import { STAFF } from "../../constants/const-paths/paths";

class Staff extends Component {
  state = {
    editIdx: -1
  };

  componentDidMount() {
    this.props.fetchStaffs();
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.users.length !== this.props.users.length)
  //     this.props.fetchStaffs();
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
        {this.props.loadingUsers ? (
          <p>...Loading</p>
        ) : (
          <>
            <Link to={`${STAFF}/add`} style={{ textDecoration: "none" }}>
              <button className="btn btn-success">Add User</button>
            </Link>
            <Table
              data={this.props.users}
              header={[
                {
                  name: "Name",
                  prop: "firstname",
                  type: "text"
                },
                {
                  name: "Surname",
                  prop: "lastname",
                  type: "text"
                },
                {
                  name: "Email",
                  prop: "email",
                  type: "email"
                },
                {
                  name: "Role",
                  prop: "role",
                  type: "text"
                },
                {
                  name: "Salary",
                  prop: "salary",
                  type: "number"
                },
                {
                  name: "Birthday",
                  prop: "birthday",
                  type: "date"
                },
                {
                  name: "Phone number",
                  prop: "phoneNumber",
                  type: "number"
                }
              ]}
              deleteItem={id => {
                this.props.removedUser(id);
              }}
              updateItem={obj => {
                this.props.editUser(obj);
              }}
              editIdx={this.state.editIdx}
              startEditing={this.startEditing}
              stopEditing={this.stopEditing}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users, loadingUsers }) => {
  return {
    users,
    loadingUsers
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
