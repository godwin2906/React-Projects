import React, { useContext } from "react";
import loginContext from "../context/context";

function Profile() {
  const { user } = useContext(loginContext);
  return <div>Profile: {user}</div>;
}

export default Profile;
