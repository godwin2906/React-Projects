import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  function addValue() {
    setCounter((prev) => {
      prev + 1;
    });
  }

  function removeValue() {
    setCounter((prev) => {
      prev - 1;
    });
  }
  return (
    <>
      <h1>React with Godwin {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
