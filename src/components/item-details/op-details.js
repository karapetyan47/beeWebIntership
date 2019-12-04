import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getPosition,
  removedPosition,
  editPosition
} from "../../redux/actions";
import DetailInput from "./details-input";
import "./details.scss";
import {
  OPEN_POSSITION_ID,
  OPEN_POSSITIONS
} from "../../constants/const-paths/paths";

const OpenPositionDetail = ({
  match,
  getPosition,
  openPosition,
  removedPosition,
  editPosition
}) => {
  const [currentlyEditing, setCurrentlyEditiing] = useState(false);
  const [value, setValue] = useState({ obj: {} });
  const handleUpdateItem = e => {
    // console.log("e", e);
    setValue({ obj: { ...value.obj, ...e.obj } });
  };

  const onUpdateItem = () => {
    if (Object.keys(value.obj).length) editPosition({ id: id, ...value });
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
    getPosition(id);
  }, [getPosition, id]);

  const keys = [
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
      name: "Age Limit",
      prop: "ageLimit",
      type: "text"
    },
    {
      name: "Salary",
      prop: "salary",
      type: "text"
    }
  ];

  return (
    <div>
      <Link to={OPEN_POSSITIONS} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>

      <div className="shadow p-3 mb-5 bg-white rounded content details">
        {openPosition ? (
          Object.keys(openPosition).length ? (
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
                        value={openPosition[x.prop]}
                        name={x.prop}
                        type={x.type}
                      />
                    ) : (
                      <p
                        className="text-center"
                        onDoubleClick={() => setCurrentlyEditiing(true)}
                        style={{
                          border: "0.5px solid grey",
                          borderRadius: "7px",
                          marginTop: "3px"
                        }}
                      >
                        {openPosition[x.prop]}
                      </p>
                    )}
                  </div>
                );
              })}
              <div>
                <div
                  className="badge badge-success text-wrap"
                  style={{ width: "6rem" }}
                >
                  URL
                </div>{" "}
                <p
                  className="text-center text-break"
                  style={{
                    border: "0.5px solid grey",
                    borderRadius: "7px",
                    marginTop: "3px",
                    padding: "0 10px"
                  }}
                >
                  {" "}
                  {`${OPEN_POSSITION_ID}=${id}`}
                </p>
              </div>
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
                  removedPosition(id);
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

const mapStateToProps = ({ openPosition }) => {
  return {
    openPosition
  };
};

const mapDispatchToProps = {
  getPosition,
  removedPosition,
  editPosition
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OpenPositionDetail));
