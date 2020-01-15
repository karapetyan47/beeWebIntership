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
import Popup from "reactjs-popup";

const OpenPositionDetail = ({
  match,
  location,
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

  const url =
    window.location.protocol +
    "//" +
    window.location.host +
    `${OPEN_POSSITION_ID}=${id}`;
  function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

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
    <div className="detail-container">
      <Link to={OPEN_POSSITIONS} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>

      <div>
        {openPosition ? (
          Object.keys(openPosition).length ? (
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
                          value={openPosition[x.prop]}
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
                          value={openPosition[x.prop]}
                          readOnly
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="input-group-append">
                <label
                  style={{ paddingLeft: 0 }}
                  className="col-sm-2 col-form-label"
                >
                  URL
                </label>
                <div className="input-group">
                  <input
                    id="myInput"
                    type="text"
                    className="form-control"
                    aria-label="Text input with segmented dropdown button"
                    value={url}
                    readOnly
                  />
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => myFunction()}
                    >
                      Copy
                    </button>
                  </div>
                </div>
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
              // <button
              //   className="btn btn-outline-danger"
              //   onClick={() => {
              //     removedPosition(id);
              //   }}
              // >
              //   <i className="fas fa-trash-alt"></i>
              // </button>
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
                          removedPosition(id);
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
