import React from "react";
import { themes } from "../../assets/theme/theme";

export const ThemeContext = React.createContext({
  theme: themes.default,
  toggleTheme: () => {},
});
