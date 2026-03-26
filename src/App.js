import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, "");
    setInputValue(sanitizedValue);
  };

  function handleInput() {
    //please put your logic here
    if (!inputValue) {
      setResult(0);
      return;
    }

    const originalNum = parseInt(inputValue, 10);
    const reversedNum = parseInt(inputValue.split("").reverse().join(""), 10);
    console.log(reversedNum);
    const difference = Math.abs(originalNum - reversedNum);
    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={inputValue} onChange={handleChange} />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
