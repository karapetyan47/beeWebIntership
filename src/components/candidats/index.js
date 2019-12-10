import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCandidats, removedCandidat, editCandidat } from "redux/actions";
import { Link } from "react-router-dom";

import Table from "utils/table-core/table";
import { CANDIDATES } from "../../constants/const-paths/paths";

class Candidats extends Component {
  state = {
    editIdx: -1,
    searchValue: ""
  };

  updateSearch(e) {
    this.setState({
      searchValue: e.target.value.substr(0, 20)
    });
  }

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
    const candidats = this.props.candidats.filter(candidat => {
      return (
        candidat.name
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1
      );
    });
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
              data={candidats}
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
              search={e => this.updateSearch(e)}
              searchValue={this.state.searchValue}
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
