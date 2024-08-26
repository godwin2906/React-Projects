import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import LoginContextProvider from "./context/LoginContextProvider";

function App() {
  const [user, setUser] = useState(0);

  return (
    <>
      <Login />
      <Profile />
    </>
  );
}

export default App;
