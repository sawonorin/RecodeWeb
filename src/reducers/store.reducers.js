import { CLEAR_STORE } from "../constants";

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "action description":
      const newState = { ...state}; // do something with the action
      return newState;
    case CLEAR_STORE:
      return {};
    default:
      throw new Error();
  }
};
