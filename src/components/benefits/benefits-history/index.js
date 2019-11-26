import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BhTable from "./bh-table";
import {
  fetchBenefitsHistorys,
  removedBenefitsHistorys
} from "../../../redux/actions";
import { BENEFITS } from "../../../constants/const-paths/paths";

class BenefitsHistory extends Component {
  state = {
    editIdx: -1
  };

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
  componentDidMount() {
    this.props.fetchBenefitsHistorys();
  }
  render() {
    return (
      <div>
        <Link
          to={BENEFITS}
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <button className="btn btn-outline-success">
            <i className="fas fa-sliders-h"></i>
          </button>
        </Link>
        <Link
          to={`${BENEFITS}/history/add`}
          style={{
            textDecoration: "none"
          }}
        >
          <button className="btn btn-success">Аdd value to the story</button>
        </Link>
        {this.props.loadingBenefitsHistorys ? (
          <p>Bzz~~</p>
        ) : (
          <BhTable
            data={this.props.benefitsHistorys}
            header={[
              {
                name: "Benefit Title",
                prop: "title",
                obj: "benefitId"
              },
              {
                name: "Username",
                prop: "firstname",
                obj: "userId"
              }
            ]}
            deleteItem={id => {
              // console.log("id", id);
              this.props.removedBenefitsHistorys(id);
            }}
            updateItem={obj => {
              console.log("obj", obj);
              // this.props.editUser(obj);
            }}
            editIdx={this.state.editIdx}
            startEditing={this.startEditing}
            stopEditing={this.stopEditing}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ benefitsHistorys, loadingBenefitsHistorys }) => {
  return {
    benefitsHistorys,
    loadingBenefitsHistorys
  };
};
const mapDispatchToProps = {
  fetchBenefitsHistorys,
  removedBenefitsHistorys
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenefitsHistory);
