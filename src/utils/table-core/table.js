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
        <button onClick={() => deleteItem(x.id)}>
          <i className="fas fa-user-times"></i>
        </button>
      </td>
    </tr>
  );

  return (
    <div className="table-section">
      <table>
        <thead>
          <tr>
            {header.map((x, i) => (
              <th key={i}>{x.name}</th>
            ))}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{data.map((x, i) => row(x, i, header))}</tbody>
      </table>
    </div>
  );
};

export default Table;
