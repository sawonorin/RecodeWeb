import React from "react";

export const ActivityContext = React.createContext({
  loading: false,
  toggleLoader: () => {},
  notification: {
    icon: "",
    title: "",
    message: "",
    color: "purple",
    static: null,
  },
  toggleNotify: () => {},
});
