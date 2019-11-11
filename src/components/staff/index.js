import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedStaff, addStaff, editStaff } from "redux/actions";

import Table from "utils/table-core/table";

class Staff extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
  }

  render() {
    return (
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
        add={this.props.addStaff}
        message="Staff"
      />
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
