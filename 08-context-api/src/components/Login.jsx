import React, { useState, useContext } from "react";
import loginContext from "../context/context";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const { setUser } = useContext(loginContext);

  const handle = (e) => {
    e.preventDefault();
};
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          setUser(e.target.value);
        }}
        placeholder="userName"
      />{" "}
      <input
        type="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handle}>Submit</button>
    </div>
  );
}

export default Login;
