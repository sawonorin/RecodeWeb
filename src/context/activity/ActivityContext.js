import React from "react";

export const notificationInitialState = {
  icon: "",
  title: "",
  message: "",
  color: "purple",
  static: false,
  position: "",
  visibilityDuration: 10000,
};

export const ActivityContext = React.createContext({
  loading: false,
  toggleLoader: () => {},
  notification: notificationInitialState,
  toggleNotify: () => {},
});
