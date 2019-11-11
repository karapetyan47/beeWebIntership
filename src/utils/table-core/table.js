import React from "react";
import Popup from "reactjs-popup";
import TableInput from "./table-input";
import AddStaff from "../../components/staff/staff-modal/table-popup";

import "./table.scss";

const Table = ({
  data,
  header,
  message,
  deleteItem = () => {},
  updateItem = () => {},
  add = () => {}
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
      <Popup
        modal
        trigger={<button className="add-staff">{`Add ${message}`}</button>}
        position="center center"
      >
        {close => <AddStaff close={close} onAddStaff={add} places={header} />}
      </Popup>
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
