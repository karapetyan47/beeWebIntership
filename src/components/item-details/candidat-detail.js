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
import Popup from "reactjs-popup";

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
    <div className="detail-container">
      <Link to={CANDIDATES} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>

      <div>
        {candidat ? (
          Object.keys(candidat).length ? (
            <div>
              {keys.map((x, i) => {
                return (
                  <div key={i} className="form-group row">
                    <label
                      htmlFor="staticEmail"
                      className="col-sm-2 col-form-label"
                    >
                      {x.name}
                    </label>
                    <div className="col-sm-10">
                      {currentlyEditing ? (
                        <DetailInput
                          id={id}
                          updateValue={e => handleUpdateItem(e)}
                          value={candidat[x.prop]}
                          name={x.prop}
                          type={x.type}
                        />
                      ) : (
                        <input
                          className="form-control-plaintext"
                          onDoubleClick={() => setCurrentlyEditiing(true)}
                          style={{
                            borderBottom: "0.5px solid grey",
                            marginTop: "3px"
                          }}
                          value={candidat[x.prop]}
                          readOnly
                        />
                      )}
                    </div>
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
              <Popup
                modal
                trigger={
                  <button className="btn btn-outline-danger">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                }
              >
                {close => (
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "20px" }}>
                      Are you sure you want to delete ?
                    </p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        className="btn btn-outline-danger"
                        style={{ marginRight: "5px" }}
                        onClick={() => {
                          removedCandidat(id);
                          close();
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => {
                          console.log("modal closed");
                          close();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
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
