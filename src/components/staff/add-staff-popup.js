import React, { useState } from "react";
import "./popup.scss";

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

const AddStaff = ({ onAddStaff, close }) => {
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
        <form className="popup-section" onSubmit={handleAddStaff}>
          <input placeholder="name" {...name.bind} />
          <input placeholder="surname" {...surname.bind} />
          <input placeholder="position" {...position.bind} />
          <input placeholder="salary" {...salary.bind} />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
