import React, { useState } from "react";

import TableInput from "./table-input";

import "./table.scss";

const Table = ({
  data,
  header,
  startEditing,
  stopEditing,
  editIdx,
  deleteItem = () => {},
  updateItem = () => {}
}) => {
  const [value, setValue] = useState([]);
  const handleUpdateItem = e => {
    // console.log("e", e);
    setValue([...value, e]);
  };

  const onUpdateItem = () => {
    if (value.length) updateItem(value);
    setValue([]);
  };

  const row = (x, i, header) => {
    const currentlyEditing = editIdx === i;
    return (
      <tr key={i}>
        {header.map((y, k) => (
          <td key={k}>
            {currentlyEditing ? (
              <TableInput
                id={x._id}
                updateValue={e => handleUpdateItem(e)}
                value={x[y.prop]}
                name={y.prop}
              />
            ) : (
              x[y.prop]
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
            <button
              className="del-btn"
              onClick={() => {
                deleteItem(x._id);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
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
                {x.name}
              </th>
            ))}
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{data.map((x, i) => row(x, i, header))}</tbody>
      </table>
    </div>
  );
};

export default Table;
