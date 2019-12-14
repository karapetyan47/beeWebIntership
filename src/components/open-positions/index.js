import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPositions, removedPosition, editPosition } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";

import { OPEN_POSSITIONS } from "../../constants/const-paths/paths";

import "./open-positions.scss";

class OpenPositions extends Component {
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
    this.props.fetchPositions();
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
    const positions = this.props.positions.filter(position => {
      return (
        position.title
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        {this.props.loadingPositions ? (
          <p>Bzz~~</p>
        ) : (
          <>
            <Link
              to={`${OPEN_POSSITIONS}/add`}
              style={{ textDecoration: "none" }}
            >
              <button className="btn btn-success">Open new position</button>
            </Link>
            <Table
              data={positions}
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
                  name: "AgeLimit",
                  prop: "ageLimit",
                  type: "number"
                },
                {
                  name: "Salary",
                  prop: "salary",
                  type: "text"
                },
                {
                  name: "Info",
                  prop: "_id",
                  type: "text"
                }
              ]}
              redirectTo={`${OPEN_POSSITIONS}`}
              deleteItem={id => {
                this.props.removedPosition(id);
              }}
              updateItem={obj => {
                this.props.editPosition({ ...obj, multi: true });
              }}
              editIdx={this.state.editIdx}
              startEditing={this.startEditing}
              stopEditing={this.stopEditing}
              search={e => this.updateSearch(e)}
              searchValue={this.state.searchValue}
              onPageChange={i => this.handlePageChange(i)}
              activePage={this.state.activePage}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ positions, loadingPositions }) => {
  return {
    positions,
    loadingPositions
  };
};

const mapDispatchToProps = {
  fetchPositions,
  removedPosition,
  editPosition
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenPositions);
