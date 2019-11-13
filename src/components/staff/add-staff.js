import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./add-staff.scss";

const useInputValue = (resetError = () => {}, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: e => {
        resetError();
        setValue(e.target.value);
      }
    },
    clear: () => setValue(""),
    value: () => value
  };
};

const AddStaff = ({ onAddStaff, url }) => {
  const name = useInputValue();
  const surname = useInputValue();
  const position = useInputValue();
  const salary = useInputValue();

  const handleAddStaff = e => {
    e.preventDefault();

    if (
      name.value().trim() &&
      surname.value().trim() &&
      position.value().trim() &&
      salary.value().trim()
    ) {
      onAddStaff({
        id: Date.now(),
        name: name.value(),
        surname: surname.value(),
        position: position.value(),
        salary: salary.value()
      });
    }
    name.clear();
    surname.clear();
    position.clear();
    salary.clear();
  };

  return (
    <div>
      <Link to={url} style={{ textDecoration: "none" }}>
        <button>Staff list</button>
      </Link>
      <div className="content">
        <h2>Staff About</h2>
        <form className="popup-section" onSubmit={handleAddStaff}>
          <input className="input-staff" placeholder="Name" {...name.bind} />
          <input
            className="input-staff"
            placeholder="Surname"
            {...surname.bind}
          />
          <input
            className="input-staff"
            placeholder="Position"
            {...position.bind}
          />
          <input
            className="input-staff"
            placeholder="Salary"
            {...salary.bind}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
