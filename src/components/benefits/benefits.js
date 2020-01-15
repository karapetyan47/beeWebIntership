import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBenefits, removedBenefit, editBenefit } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import "./benefits.scss";
import { BENEFITS } from "../../constants/const-paths/paths";

class Benefits extends Component {
  state = {
    editIdx: -1,
    searchValue: "",
    activePage: 1
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  updateSearch(e) {
    this.setState({
      searchValue: e.target.value.substr(0, 20)
    });
  }

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
    const benefits = this.props.benefits.filter(benefit => {
      return (
        benefit.title
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1 ||
        benefit.description
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1
      );
    });
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
        {this.props.loadingBenefits ? (
          <p>Bzz~~</p>
        ) : (
          <Table
            data={benefits}
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
              },
              {
                name: "Info",
                prop: "_id",
                type: "text"
              }
            ]}
            redirectTo={`${BENEFITS}`}
            deleteItem={id => {
              this.props.removedBenefit(id);
            }}
            updateItem={obj => {
              this.props.editBenefit({ ...obj, multi: true });
            }}
            editIdx={this.state.editIdx}
            startEditing={this.startEditing}
            stopEditing={this.stopEditing}
            search={e => this.updateSearch(e)}
            searchValue={this.state.searchValue}
            onPageChange={i => this.handlePageChange(i)}
            activePage={this.state.activePage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ benefits, loadingBenefits }) => {
  return {
    benefits,
    loadingBenefits
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
