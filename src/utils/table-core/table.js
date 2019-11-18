import React from "react";

import TableInput from "./table-input";

import "./table.scss";

const Table = ({
  data,
  header,
  deleteItem = () => {},
  updateItem = () => {}
}) => {
  const row = (x, i, header) => (
    <tr key={i}>
      {header.map((y, k) => (
        <td key={k}>
          <TableInput
            id={x.id}
            updateValue={updateItem}
            value={x[y.prop]}
            name={y.prop}
          />
        </td>
      ))}
      <td>
        <button
          className="del-btn"
          onClick={() => {
            deleteItem(x._id);
          }}
        >
          <i className="fas fa-user-times"></i>
        </button>
      </td>
    </tr>
  );

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
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{data.map((x, i) => row(x, i, header))}</tbody>
      </table>
    </div>
  );
};

export default Table;
