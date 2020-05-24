import React, { useState, useEffect } from "react";
import { themes } from "../../assets/theme/theme";
import { ThemeContext } from "./ThemeContext";
import { switchTheme, getRandomTheme, localThemeState } from "../../helpers";
import { THEME, defaultTheme } from "../../constants";

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    localThemeState ? localThemeState : defaultTheme
  );

  const toggleTheme = () => {
    let themeKey = getRandomTheme();
    setTheme(themes[themeKey]); //app switching
    switchTheme(themes[themeKey]); //dom switching
  };

  let value = {
    theme,
    toggleTheme: toggleTheme,
  };

  useEffect(() => {
    localStorage.setItem(THEME, JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
