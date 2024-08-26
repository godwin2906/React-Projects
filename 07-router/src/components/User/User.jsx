import React from "react";

import { useParams } from "react-router-dom";

function User() {

    const {id} = useParams()
  return (
    <div className="bg-orange-900 text-black text-3xl text-center py-5">
      User:{id}
    </div>
  );
}

export default User;
