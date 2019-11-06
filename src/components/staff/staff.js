import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStaffs } from "redux/actions";

import "./staff.scss";

class Staff extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
  }
  componentDidUpdate() {
    this.props.fetchStaffs();
  }

  renderRow = staff => {
    const { id, name, surname, skills, salary } = staff;

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{skills}</td>
        <td>{salary}</td>
        <td>
          <button onClick={() => {}}>&times;</button>
        </td>
        <td>
          <button onClick={() => {}}>Edit</button>
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
              <th>Skills</th>
              <th>Salary</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>{this.props.staffs.map(this.renderRow)}</tbody>
        </table>
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
  fetchStaffs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);
