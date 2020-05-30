import { useState, useReducer } from "react";
import { authService } from "../services/auth.service";
import { SUCCESS_RESPONSE, ERROR_RESPONSE, SMITE_USER } from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { useHistory } from "react-router-dom";
import { setItemInLocalStorage } from "../helpers";

export const authHooks = {
  useLogin,
};

function useLogin() {
  const initialState = { user: "", error: "" };
  const [loginResponse, setLoginResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const history = useHistory();

  function login(payload) {
    setLoginResponse(initialState);
    dispatch(apiActions.startRequest());

    return authService.login(payload).then((res) => {
      dispatch(apiActions.endRequest());

      if (res.status === SUCCESS_RESPONSE) {
        setLoginResponse({ user: res.response }); //Update user
        setItemInLocalStorage(SMITE_USER, res.response); //Persist in local storage
        history.push("/dashboard");
      }
      if (res.status === ERROR_RESPONSE) {
        setLoginResponse({ error: res.response }); //show error message
      }
    });
  }

  return { ...state, loginResponse, login };
}
