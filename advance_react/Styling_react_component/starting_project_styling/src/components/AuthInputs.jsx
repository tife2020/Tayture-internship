import { useState } from "react";
import { styled } from "styled-components";
import ControlCont from "./ControlCont";
import UserInput from "./UserInput";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlCont>
        <UserInput
          invalid={emailNotValid}
          label="Email"
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <UserInput
          invalid={passwordNotValid}
          label="Password"
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlCont>
      <div className="actions1">
        <button type="button" className="text-button1">
          Create a new account
        </button>
        <button className="button1" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
