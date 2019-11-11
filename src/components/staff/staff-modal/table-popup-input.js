import React, { useState } from "react";

const useInputValue = (setInputValue = () => {}, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: e => {
        setValue(e.target.value);
        setInputValue(value);
      }
    },
    clear: () => setValue(""),
    value: () => value
  };
};

const PopupInput = ({ placeName, setInput }) => {
  const place = useInputValue(setInput());
  return (
    <input className="input-staff" placeholder={placeName} {...place.bind} />
  );
};

export default PopupInput;
