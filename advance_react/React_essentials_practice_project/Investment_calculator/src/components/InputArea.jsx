import React, { useState } from "react";
import UserInput from "./UserInput";

const inputLabels = [
  {
    label: "Initial Investment",
    name: "initialInvestment",
  },
  {
    label: "Annual Investment",
    name: "annualInvestment",
  },
  {
    label: "Expected Return",
    name: "expectedReturn",
  },
  {
    label: "Duration",
    name: "duration",
  },
];

function InputArea({handleChange,inputValues}) {

  console.log(inputValues);
  return (
    <div id="user-input">
      <div className="input-group">
        {inputLabels.slice(0, 2).map((input) => (
          <UserInput
            key={input.name}
            label={input.label}
            name={input.name}
            onValueChange={handleChange}
            inputValue={inputValues[input.name]}
          />
        ))}
      </div>
      <div className="input-group">
        {inputLabels.slice(2).map((input) => (
          <UserInput
            key={input.name}
            label={input.label}
            name={input.name}
            onValueChange={handleChange}
            inputValue={inputValues[input.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default InputArea;
