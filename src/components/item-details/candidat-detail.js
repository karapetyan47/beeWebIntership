import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCandidat,
  removedCandidat,
  editCandidat
} from "../../redux/actions";
import DetailInput from "./details-input";
import "./details.scss";
import { CANDIDATES } from "../../constants/const-paths/paths";

const CandidatDetail = ({
  match,
  getCandidat,
  candidat,
  removedCandidat,
  editCandidat
}) => {
  const [currentlyEditing, setCurrentlyEditiing] = useState(false);
  const [value, setValue] = useState({ obj: {} });
  const handleUpdateItem = e => {
    // console.log("e", e);
    setValue({ obj: { ...value.obj, ...e.obj } });
  };

  const onUpdateItem = () => {
    if (Object.keys(value.obj).length) editCandidat({ id: id, ...value });
    setValue({ obj: {} });
  };

  const startEditing = () => {
    setCurrentlyEditiing(true);
  };

  const stopEditing = () => {
    setCurrentlyEditiing(false);
  };
  const id = match.params.id;
  useEffect(() => {
    getCandidat(id);
  }, [getCandidat, id]);

  const keys = [
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
  ];

  return (
    <div>
      <Link to={CANDIDATES} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>

      <div className="shadow p-3 mb-5 bg-white rounded content details">
        {candidat ? (
          Object.keys(candidat).length ? (
            <div>
              {keys.map((x, i) => {
                return (
                  <div key={i} className="detail">
                    <div
                      className="badge badge-primary text-wrap"
                      style={{
                        width: "6rem",
                        height: "24px"
                      }}
                    >
                      {x.name}
                    </div>{" "}
                    {currentlyEditing ? (
                      <DetailInput
                        id={id}
                        updateValue={e => handleUpdateItem(e)}
                        value={candidat[x.prop]}
                        name={x.prop}
                        type={x.type}
                      />
                    ) : (
                      <span>{candidat[x.prop]}</span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <span>Bzz~~</span>
          )
        ) : (
          <span>Bzz~~</span>
        )}
        <div className="assets">
          <div style={{ marginRight: "5px" }}>
            {currentlyEditing ? (
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  onUpdateItem();
                  stopEditing();
                }}
              >
                <i className="fas fa-check"></i>
              </button>
            ) : (
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  startEditing();
                }}
              >
                <i className="fas fa-pen"></i>
              </button>
            )}
          </div>
          <div style={{ marginRight: "5px" }}>
            {currentlyEditing ? (
              <button
                className="btn btn-outline-warning"
                onClick={() => {
                  setValue({ obj: {} });
                  stopEditing();
                }}
              >
                <i className="fas fa-ban"></i>
              </button>
            ) : (
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  removedCandidat(id);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ candidat }) => {
  return {
    candidat
  };
};

const mapDispatchToProps = {
  getCandidat,
  removedCandidat,
  editCandidat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CandidatDetail));
