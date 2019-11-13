import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedStaff, addStaff, editStaff } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./staff.scss";

class Staff extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
  }

  render() {
    return (
      <div>
        <Link to={`${this.props.url}/add`} style={{ textDecoration: "none" }}>
          <button>Add Staff</button>
        </Link>
        <Table
          data={this.props.staffs}
          header={[
            {
              name: "Name",
              prop: "name"
            },
            {
              name: "Surname",
              prop: "surname"
            },
            {
              name: "Position",
              prop: "position"
            },
            {
              name: "Salary",
              prop: "salary"
            }
          ]}
          deleteItem={this.props.removedStaff}
          updateItem={(name, value, id) =>
            this.props.editStaff({ name, value, id })
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ staffs }) => {
  return {
    staffs
  };
};

const mapDispatchToProps = {
  fetchStaffs,
  removedStaff,
  addStaff,
  editStaff
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
