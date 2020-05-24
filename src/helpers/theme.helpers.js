import { generateRandomNumber } from "./app.helpers";
import { themes } from "../assets/theme/theme";
import { THEME } from "../constants";

export const switchTheme = (theme) => {
  let newTheme = theme;
  for (let key in newTheme) {
    let color = newTheme[key];
    document.documentElement.style.setProperty(key, color);
  }
};

export const getRandomTheme = () => {
  let objectKeys = Object.keys(themes);
  let randomIndex = generateRandomNumber(0, Object.keys(themes).length);
  let theme = objectKeys[randomIndex];
  return theme;
};

export const localThemeState = JSON.parse(localStorage.getItem(THEME));
