import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedStaff, addStaff } from "redux/actions";

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
        updateItem={val => console.log(val)}
        add={this.props.addStaff}
        title="Staff"
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
  addStaff
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
