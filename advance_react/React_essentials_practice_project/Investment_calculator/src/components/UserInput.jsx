import React from "react";

function UserInput({ label,name,inputValue,onValueChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" name={name} value={inputValue} onChange={onValueChange} />
    </div>
  );
}

export default UserInput;
