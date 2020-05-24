import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { switchTheme, localThemeState } from "./helpers";
import ThemeProvider from "./context/theme/ThemeProvider";
import Routes from "./routes/Routes";
import { defaultTheme } from "./constants";
import 'semantic-ui-css/semantic.min.css'

//set default theme
switchTheme(localThemeState ? localThemeState : defaultTheme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
