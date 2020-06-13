import React from "react";
import ExternalRoutes from "../routes/externalRoutes";
import ActivityProvider from "../context/activity/ActivityProvider";
import { StoreProvider } from "../context/store/Store";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "../assets/styles/index.scss";

const App = () => {
  return (
    <React.StrictMode>
      <ActivityProvider>
        <StoreProvider>
          <ExternalRoutes />
        </StoreProvider>
      </ActivityProvider>
    </React.StrictMode>
  );
};

export default App;
