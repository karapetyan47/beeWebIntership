import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBenefits, removedBenefit, editBenefit } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./benefits.scss";
import { BENEFITS } from "../../constants/const-paths/paths";

class Benefits extends Component {
  state = {
    editIdx: -1
  };

  componentDidMount() {
    this.props.fetchBenefits();
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
    return (
      <div>
        <Link
          to={`${BENEFITS}/add`}
          style={{
            textDecoration: "none"
          }}
        >
          <button className="btn btn-success">Add benefit</button>
        </Link>
        <Link
          to={`${BENEFITS}/history`}
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <button className="btn btn-outline-success">
            <i className="fas fa-arrow-left"></i>
          </button>
        </Link>
        <Table
          data={this.props.benefits}
          header={[
            {
              name: "Title",
              prop: "title",
              type: "text"
            },
            {
              name: "Description",
              prop: "description",
              type: "text"
            }
          ]}
          deleteItem={id => {
            this.props.removedBenefit(id);
          }}
          updateItem={obj => {
            this.props.editBenefit(obj);
          }}
          editIdx={this.state.editIdx}
          startEditing={this.startEditing}
          stopEditing={this.stopEditing}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ benefits }) => {
  return {
    benefits
  };
};

const mapDispatchToProps = {
  fetchBenefits,
  removedBenefit,
  editBenefit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Benefits);
