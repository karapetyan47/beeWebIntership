import React from "react";
export function createTable(
  tHead = [],
  tBody = [],
  edit = () => {},
  remove = () => {}
) {
  const renderRow = () => {
    return (
      <tr key={Date.now()}>
        {tBody.map(() => {})}
        <td>
          <button onClick={edit}>
            <i className="fas fa-user-edit"></i>
          </button>
        </td>
        <td>
          <button onClick={remove}>
            <i className="fas fa-user-times"></i>
          </button>
        </td>
      </tr>
    );
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>{tBody.map(renderRow)}</tbody>
    </table>
  );
}
