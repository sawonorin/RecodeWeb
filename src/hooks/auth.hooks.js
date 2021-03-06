import { useReducer, useContext } from "react";
import { authService } from "../services/auth.service";
import {
  SUCCESS_RESPONSE,
  ERROR_RESPONSE,
  SMITE_USER,
  GLOBAL_STATE,
  ERROR_COLOUR,
  HIRE_WELL_COLOUR,
} from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { useHistory } from "react-router-dom";
import { setItemInLocalStorage, removeItemFromLocalStorage } from "../helpers";
import { ActivityContext } from "../context/activity/ActivityContext";

export const authHooks = {
  useLogin,
  useLogOut,
};

function useLogin() {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);
  const history = useHistory();

  function login(payload) {
    dispatch(apiActions.startRequest());
    return authService.login(payload).then((res) => {
      dispatch(apiActions.endRequest());
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        if (response.requestSuccessful) {
          setItemInLocalStorage(SMITE_USER, response.responseData); //Persist in local storage
          history.push("/dashboard");
          toggleNotify({
            icon: "user",
            title: `Hello ${response.responseData.user.firstName}! Welcome to Hire Well!`,
            message: res.response,
            color: HIRE_WELL_COLOUR,
            position: "bottom",
          });
        } else {
          toggleNotify({
            icon: "announcement",
            title: "Error!",
            message: response.message,
            color: ERROR_COLOUR,
            static: true,
          });
        }
      }
      if (res.status === ERROR_RESPONSE) {
        toggleNotify({
          icon: "announcement",
          title: "Error!",
          message: response.message ? response.message : response,
          color: ERROR_COLOUR,
          static: true,
        });
      }
    });
  }

  return { ...state, login };
}

function useLogOut() {
  // const globalState = useContext(store);
  // const { dispatch } = globalState;
  const history = useHistory();

  function logOut() {
    // dispatch({ type: CLEAR_STORE });
    removeItemFromLocalStorage(SMITE_USER);
    removeItemFromLocalStorage(GLOBAL_STATE);
    history.push("/");
  }
  return { logOut };
}
