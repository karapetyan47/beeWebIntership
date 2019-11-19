import React, { useState } from "react";

const TableInput = ({ value, updateValue = () => {}, name, id }) => {
  const [inputValue, setInputValue] = useState(value);
  // const [prevInputValue, setPrevInputValue] = useState(value);

  // const disabledOn = e => {
  //   e.target.readOnly = true;
  // };

  // const disabledOff = e => {
  //   e.target.readOnly = false;
  // };

  // const onDbClick = e => {
  //   setPrevInputValue(e.target.value);
  //   disabledOff(e);
  // };

  const onBlur = e => {
    // setInputValue(prevInputValue);
    // disabledOn(e);
    updateValue({ title: e.target.name, value: e.target.value, id });
  };

  const changeValue = e => {
    // const prevValue = inputValue;
    setInputValue(e.target.value);

    // updateValue({ value: e.target.value, title: e.target.name, id });

    // if (prevValue !== inputValue) {
    // select(e);
    // }
  };
  // const select = e => {
  //   console.log(change);
  //   if (change) {
  //     // if (e.target.value !== prevInputValue) {
  //     updateValue(e.target.name, e.target.value, id);
  //     //   setPrevInputValue(e.target.value);
  //     // }
  //     onChange(false);
  //   }
  // };

  return (
    <input
      name={name}
      // onDoubleClick={onDbClick}
      onChange={changeValue}
      // onKeyUp={select}
      onBlur={onBlur}
      // readOnly={true}
      value={inputValue}
      className="form-control"
    />
  );
};

export default TableInput;
