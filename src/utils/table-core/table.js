import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableInput from "./table-input";
import Popup from "reactjs-popup";

import "./table.scss";

const Table = ({
  data,
  header,
  startEditing,
  stopEditing,
  editIdx,
  redirectTo = "",
  deleteItem = () => {},
  updateItem = () => {}
}) => {
  const [value, setValue] = useState({ id: null, obj: {} });
  const handleUpdateItem = e => {
    // console.log("e", e);
    setValue({ id: e.id, obj: { ...value.obj, ...e.obj } });
  };

  const onUpdateItem = () => {
    if (value.id && Object.keys(value.obj).length) updateItem(value);
    setValue({ id: null, obj: {} });
  };

  const row = (x, i, header) => {
    const currentlyEditing = editIdx === i;
    return (
      <tr key={i}>
        {header.map((y, k) => (
          <td key={k}>
            {y.name === "Info" ? (
              <Link
                to={{
                  pathname: `${redirectTo}/${x[y.prop]}/edit`,
                  state: { id: x[y.prop] }
                }}
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                <button className="info-btn">
                  <i className="far fa-eye"></i>
                </button>
              </Link>
            ) : currentlyEditing ? (
              <TableInput
                id={x._id}
                updateValue={e => handleUpdateItem(e)}
                value={x[y.prop]}
                name={y.prop}
                type={y.type}
              />
            ) : (
              <p
                onDoubleClick={() => {
                  startEditing(i);
                }}
              >
                {x[y.prop]}
              </p>
            )}
          </td>
        ))}
        <td>
          {currentlyEditing ? (
            <button
              className="edit-btn"
              onClick={() => {
                onUpdateItem();
                stopEditing();
              }}
            >
              <i className="fas fa-check"></i>
            </button>
          ) : (
            <button
              className="edit-btn"
              onClick={() => {
                // setValue(x);
                startEditing(i);
              }}
            >
              <i className="fas fa-pen"></i>
            </button>
          )}
        </td>
        <td>
          {currentlyEditing ? (
            <button
              className="cancel-btn"
              onClick={() => {
                setValue([]);
                stopEditing();
              }}
            >
              <i className="fas fa-ban"></i>
            </button>
          ) : (
            <Popup
              modal
              trigger={
                <button className="del-btn">
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
                        deleteItem(x._id);
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
        </td>
      </tr>
    );
  };

  return (
    <div className="table-section">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {header.map((x, i) => (
              <th scope="col" key={i}>
                {x.name === "Info" ? "" : x.name}
              </th>
            ))}

            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{data.map((x, i) => row(x, i, header))}</tbody>
      </table>
    </div>
  );
};

export default Table;
