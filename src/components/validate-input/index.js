import React, { useState } from "react";

const ValidateInput = props => {
  const { type, name, value } = props;
  let error = "";

  function validate(type, name, value) {
    switch (type) {
      case "email":
        if (!value.includes("@")) {
          error = "emial is invalid";
        }
        break;

      default:
        if (!value.trim()) {
          error = `${name} is invalid`;
        }
        break;
    }
  }
  return (
    <>
      <input className="form-control" {...props} />
      {error ? <div style={{ fontSize: 12, color: "red" }}>{error}</div> : null}
    </>
  );
};

export default ValidateInput;
