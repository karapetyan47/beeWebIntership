import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCandidats, removedCandidat, editCandidat } from "redux/actions";

import Table from "utils/table-core/table";

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
                }
              ]}
              deleteItem={id => {
                this.props.removedCandidat(id);
              }}
              updateItem={obj => {
                this.props.editCandidat(obj);
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
