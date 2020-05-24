import { useState } from "react";
import { authService } from "../services/auth.service";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../constants";

export const authHooks = {
  useLogin,
};

function useLogin() {
  const [response, setResponse] = useState({ user: "", error: "" });

  function login(payload) {
    return authService.login(payload).then((res) => {
      if (res.status === SUCCESS_RESPONSE) {
        //Update user
        setResponse({ response: res.response });
      }
      if (res.status === ERROR_RESPONSE) {
        //show error message
        setResponse({ error: res.response });
      }
    });
  }

  return { response, login };
}
