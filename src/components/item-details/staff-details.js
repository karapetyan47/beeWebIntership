import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, removedUser, editUser } from "../../redux/actions";
import DetailInput from "./details-input";
import "./details.scss";
import { STAFF } from "../../constants/const-paths/paths";

const StaffDetails = ({ match, getUser, userAbout, removedUser, editUser }) => {
  const [currentlyEditing, setCurrentlyEditiing] = useState(false);
  const [value, setValue] = useState({ obj: {} });
  const handleUpdateItem = e => {
    // console.log("e", e);
    setValue({ obj: { ...value.obj, ...e.obj } });
  };

  const onUpdateItem = () => {
    if (Object.keys(value.obj).length) editUser({ id: id, ...value });
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
    getUser(id);
  }, [getUser, id]);

  const keys = [
    {
      name: "Name",
      prop: "firstname",
      type: "text"
    },
    {
      name: "Surname",
      prop: "lastname",
      type: "text"
    },
    {
      name: "Email",
      prop: "email",
      type: "email"
    },
    {
      name: "Salary",
      prop: "salary",
      type: "number"
    },
    {
      name: "Birthday",
      prop: "birthday",
      type: "date"
    },
    {
      name: "Phone number",
      prop: "phoneNumber",
      type: "number"
    }
  ];

  return (
    <div>
      <Link to={STAFF} style={{ textDecoration: "none" }}>
        <button className="btn btn-outline-success">
          <i className="fas fa-arrow-left"></i>
        </button>
      </Link>

      <div className="shadow p-3 mb-5 bg-white rounded content details">
        {userAbout ? (
          Object.keys(userAbout).length ? (
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
                        value={userAbout[x.prop]}
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
                        {userAbout[x.prop]}
                      </p>
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
                  removedUser(id);
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

const mapStateToProps = ({ userAbout }) => {
  return {
    userAbout
  };
};

const mapDispatchToProps = {
  getUser,
  removedUser,
  editUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StaffDetails));
