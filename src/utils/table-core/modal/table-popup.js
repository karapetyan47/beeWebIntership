import React, { useState } from "react";

import "./table-popup.scss";
// import PopupInput from "./table-popup-input";

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

const AddStaff = ({ onAddStaff, close, places }) => {
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
    <div className="modal">
      <span className="close" onClick={close}>
        &times;
      </span>
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
          {/* {places.map((x, i) => (
            <PopupInput key={i} placeName={x.name} setInput={handleInput} />
          ))} */}
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
