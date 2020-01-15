import React from "react";

import "./bh-table.scss";

const BhTable = ({ data, header, deleteItem = () => {} }) => {
  const row = (x, i, header) => {
    return (
      <tr key={i}>
        {header.map((y, k) => {
          return (
            <td key={k}>
              <p>{x[y.obj][y.prop]}</p>
            </td>
          );
        })}
        <td>
          <button
            className="del-btn"
            onClick={() => {
              deleteItem(x._id);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
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
          </tr>
        </thead>
        <tbody>{data.map((x, i) => row(x, i, header))}</tbody>
      </table>
    </div>
  );
};

export default BhTable;
