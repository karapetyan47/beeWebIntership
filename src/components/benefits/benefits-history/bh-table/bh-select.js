import React, { useState } from "react";

const TableSelect = ({ value, updateValue = () => {}, name, id }) => {
  const [selectValue, setInputValue] = useState(value);

  const onBlur = e => {
    updateValue({ obj: { [e.target.name]: e.target.value }, id });
  };

  const changeValue = e => {
    setInputValue(e.target.value);
  };

  return (
    <select
      name={name}
      onChange={changeValue}
      onBlur={onBlur}
      value={selectValue}
      className="form-control"
    >
      <option>{selectValue}</option>
    </select>
  );
};

export default TableSelect;
