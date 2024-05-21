import { useState } from "react";
import InputArea from "./components/InputArea"
import Result from "./components/Result"

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setInputValues((prevInputValues) => {
      return {
        ...prevInputValues,
        [name]: Number(value),
      };
    });
  }
  return (
    <>
      <InputArea handleChange={handleChange} inputValues={inputValues}/>
      <Result inputValues ={inputValues}/>
    </>
  )
}

export default App
