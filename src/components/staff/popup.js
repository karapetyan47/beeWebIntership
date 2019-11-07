import React from "react";
import "./popup.scss";

const AddStaff = () => {
  const handleAddStaff = e => {
    e.preventDefault();
  };

  return (
    <form className="popup-section" onSubmit={handleAddStaff}>
      <input placeholder="name" />
      <input placeholder="surname" />
      <input placeholder="position" />
      <input placeholder="salary" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStaff;
