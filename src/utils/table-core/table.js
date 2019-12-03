import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableInput from "./table-input";

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
                  <i className="fas fa-info"></i>
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
