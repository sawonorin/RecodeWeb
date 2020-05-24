import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { localUserState } from "../../helpers";
import { SMITE_USER } from "../../constants";

const UserProvider = (props) => {
  const [user, setUser] = useState(localUserState ? localUserState : {});

  const toggleUser = () => {
    setUser();
  };

  let value = {
    user,
    toggleUser: toggleUser,
  };

  useEffect(() => {
    localStorage.setItem(SMITE_USER, JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
