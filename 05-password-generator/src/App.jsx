import { useState, useCallback, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const copy = useRef();

  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/~`";

  const generatePassword = useCallback(() => {
    let pass = ""
    let upperAndLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) upperAndLower += specialCharacters;
    if (numberAllowed) upperAndLower += numbers;

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * upperAndLower.length + 1);
      pass += upperAndLower.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, length]);

  useEffect(() => {
    generatePassword()
  }, [numberAllowed, charAllowed, length]);

  const handleCopy = () => {
    const text = copy.current.value;
    navigator.clipboard.writeText(text);
    copy.current.select();
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounde-lg px-4 py-3 my-8 bg-gray-800 text-black-400">
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={copy}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 text-white">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
