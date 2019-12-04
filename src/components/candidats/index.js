import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCandidats, removedCandidat, editCandidat } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";
import { CANDIDATES } from "../../constants/const-paths/paths";

class Candidats extends Component {
  state = {
    editIdx: -1
  };

  componentDidMount() {
    this.props.fetchCandidats();
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
        {this.props.loadingCandidats ? (
          <p>Bzz~~</p>
        ) : (
          <>
            <Link to={`${CANDIDATES}/add`} style={{ textDecoration: "none" }}>
              <button className="btn btn-success">Add new candidat</button>
            </Link>
            <Table
              data={this.props.candidats}
              header={[
                {
                  name: "Name",
                  prop: "name",
                  type: "text"
                },
                {
                  name: "Surname",
                  prop: "surname",
                  type: "text"
                },

                {
                  name: "Email",
                  prop: "email",
                  type: "email"
                },
                {
                  name: "Age",
                  prop: "age",
                  type: "number"
                },
                {
                  name: "Skills",
                  prop: "skills",
                  type: "text"
                },
                {
                  name: "Experience",
                  prop: "experience",
                  type: "text"
                },
                {
                  name: "Info",
                  prop: "_id",
                  type: "text"
                }
              ]}
              redirectTo={CANDIDATES}
              deleteItem={id => {
                this.props.removedCandidat(id);
              }}
              updateItem={obj => {
                this.props.editCandidat({ ...obj, multi: true });
              }}
              editIdx={this.state.editIdx}
              startEditing={this.startEditing}
              stopEditing={this.stopEditing}
            />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ candidats, loadingCandidats }) => {
  return {
    candidats,
    loadingCandidats
  };
};

const mapDispatchToProps = {
  fetchCandidats,
  removedCandidat,
  editCandidat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidats);
