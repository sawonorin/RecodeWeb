import React, { createContext, useReducer, useEffect } from "react";
import { storeReducer } from "../../reducers";
import { setItemInLocalStorage, getItemFromLocalStorage } from "../../helpers";
import { GLOBAL_STATE } from "../../constants";

const storedGlobalState = getItemFromLocalStorage(GLOBAL_STATE);
const initialState = storedGlobalState ? storedGlobalState : { azy: "" };
//if there is a stored global state, use it instead

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  //Persist global state in local storage
  useEffect(() => {
    setItemInLocalStorage(GLOBAL_STATE, state);
  }, [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
