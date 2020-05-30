export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const setItemInLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeItemFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};