import React, { useState } from "react";

const TableInput = ({ value, updateValue = () => {}, name, id }) => {
  const [inputValue, setInputValue] = useState(value);
  const [prevInputValue, setPrevInputValue] = useState(value);

  const disabledOn = e => {
    e.target.readOnly = true;
  };

  const disabledOff = e => {
    e.target.readOnly = false;
  };

  const onDbClick = e => {
    setPrevInputValue(e.target.value);
    disabledOff(e);
  };

  const onBlur = e => {
    setInputValue(prevInputValue);
    disabledOn(e);
  };

  const changeValue = e => {
    const prevValue = inputValue;
    setInputValue(e.target.value);
    if (prevValue !== inputValue) {
      select(e);
    }
  };
  const select = e => {
    if (e.keyCode === 13) {
      if (e.target.value !== prevInputValue) {
        updateValue(e.target.name, e.target.value, id);
        setPrevInputValue(e.target.value);
      }
      disabledOn(e);
    }
  };

  return (
    <input
      name={name}
      onDoubleClick={onDbClick}
      onChange={changeValue}
      onKeyUp={select}
      onBlur={onBlur}
      readOnly={true}
      value={inputValue}
    />
  );
};

export default TableInput;
