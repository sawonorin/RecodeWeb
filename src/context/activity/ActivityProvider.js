import React, { useState } from "react";
import { ActivityContext } from "./ActivityContext";

const ActivityProvider = (props) => {
  const [loading, toggleLoading] = useState(false);
  const [notification, toggleNotification] = useState({
    icon: "",
    title: "",
    message: "",
    color: "",
    static: false,
  });

  const toggleLoader = (value) => {
    toggleLoading(value);
  };

  const toggleNotify = (value) => {
    toggleNotification(value);
  };

  let value = {
    loading,
    toggleLoader,
    notification,
    toggleNotify,
  };

  return (
    <ActivityContext.Provider value={value}>
      {props.children}
    </ActivityContext.Provider>
  );
};

export default ActivityProvider;
