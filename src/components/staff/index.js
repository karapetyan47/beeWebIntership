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
    searchValue: "",
    activePage: 1,
    sortBy: "firstname",
    sortType: 1
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  handleSortType(i) {
    this.setState({ sortType: i });
    console.log("sortType", this.state.sortType);
  }

  handleSortBy(sortBy) {
    this.setState({ sortBy: sortBy });
  }

  updateSearch(e) {
    this.setState({
      searchValue: e.target.value.substr(0, 20)
    });
  }
  componentDidMount() {
    this.props.fetchStaffs({
      page: this.state.activePage,
      by: this.state.sortBy,
      sortType: this.state.sortType
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.activePage !== this.state.activePage ||
      prevState.sortBy !== this.state.sortBy ||
      prevState.sortType !== this.state.sortType
    ) {
      this.props.fetchStaffs({
        page: this.state.activePage,
        by: this.state.sortBy,
        sortType: this.state.sortType
      });
    }
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
          .indexOf(this.state.searchValue.toLowerCase()) !== -1 ||
        user.lastname
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
                // {
                //   name: "Salary",
                //   prop: "salary",
                //   type: "number"
                // },
                // {
                //   name: "Birthday",
                //   prop: "birthday",
                //   type: "date"
                // },
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
              onPageChange={i => this.handlePageChange(i)}
              activePage={this.state.activePage}
              count={this.props.usersCount}
              onSortBy={i => this.handleSortBy(i)}
              onSortType={i => this.handleSortType(i)}
              sortBy={this.state.sortBy}
              sortType={this.state.sortType}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ users, loadingUsers, usersCount }) => {
  return {
    users,
    loadingUsers,
    usersCount
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
