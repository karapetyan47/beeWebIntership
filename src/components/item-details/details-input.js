import React, { useState } from "react";

const DetailInput = ({ value, updateValue = () => {}, name, id, type }) => {
  const [inputValue, setInputValue] = useState(value);

  const onBlur = e => {
    updateValue({ obj: { [e.target.name]: e.target.value }, id });
  };

  const changeValue = e => {
    setInputValue(e.target.value);
  };

  return (
    <input
      name={name}
      onChange={changeValue}
      onBlur={onBlur}
      value={inputValue}
      type={type}
      className="form-control"
    />
  );
};

export default DetailInput;
