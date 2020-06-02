import React from "react";
import ExternalRoutes from "../routes/externalRoutes";
import { StateProvider } from "../context/store/Store";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import "../assets/styles/index.scss"

const App = () => {
  return (
    <React.StrictMode>
      <StateProvider>
        <ExternalRoutes />
      </StateProvider>
    </React.StrictMode>
  );
};

export default App;
