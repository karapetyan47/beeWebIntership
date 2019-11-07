import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs, removedStaff } from "redux/actions";
import Popup from "reactjs-popup";
import AddStaff from "./popup";

import "./staff.scss";

class Staff extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
  }

  renderRow = staff => {
    const { id, name, surname, position, salary } = staff;

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{position}</td>
        <td>{salary}</td>
        <td>
          <button onClick={() => {}}>
            <i className="fas fa-user-edit"></i>
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              console.log(id);
              this.props.removedStaff(id);
            }}
          >
            <i className="fas fa-user-times"></i>
          </button>
        </td>
      </tr>
    );
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>{this.props.staffs.map(this.renderRow)}</tbody>
        </table>
        <Popup
          trigger={<button className="add-staff">Add Staff</button>}
          position="center center"
        >
          <AddStaff />
        </Popup>
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
  removedStaff
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
