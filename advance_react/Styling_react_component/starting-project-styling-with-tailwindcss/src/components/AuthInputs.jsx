import { useState } from "react";
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
    <div className="w-full max-w-[28rem] p-8 my-0 mx-auto rounded-lg text-white shadow bg-gradient-to-b from-[#474232] to-[#28271c]">
      <div className="flex flex-col gap-2 mb-6">
        <UserInput
          label="Email"
          type="email"
          valid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <UserInput
        label='Password'
          type="password"
          valid = {passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className=" flex justify-center gap-4">
        <button type="button" className="text-[#f0b322] hover:text-[#f0920e] border-none">
          Create a new account
        </button>
        <button className=" py-4 px-8 font-semibold uppercase rounded text-[#1f2937] bg-[#f0b322] hover:bg-[#f0920e] border-none" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
