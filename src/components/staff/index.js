import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedUser, editUser } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./staff.scss";
import { STAFF } from "../../constants/const-paths/paths";

class Staff extends Component {
  state = {
    editIdx: -1,
    searchValue: ""
  };

  updateSearch(e) {
    this.setState({
      searchValue: e.target.value.substr(0, 20)
    });
  }
  componentDidMount() {
    this.props.fetchStaffs();
  }

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
    const users = this.props.users.filter(user => {
      return (
        user.firstname
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        {this.props.loadingUsers ? (
          <p>Bzz~~</p>
        ) : (
          <>
            <Link to={`${STAFF}/add`} style={{ textDecoration: "none" }}>
              <button className="btn btn-success">Add User</button>
            </Link>
            <Table
              data={users}
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
                },
                {
                  name: "Info",
                  prop: "_id",
                  type: "text"
                }
              ]}
              redirectTo={`${STAFF}`}
              deleteItem={id => {
                this.props.removedUser(id);
              }}
              updateItem={obj => {
                this.props.editUser({ ...obj, multi: true });
              }}
              editIdx={this.state.editIdx}
              startEditing={this.startEditing}
              stopEditing={this.stopEditing}
              search={e => this.updateSearch(e)}
              searchValue={this.state.searchValue}
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
