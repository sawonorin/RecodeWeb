import { useState, useReducer, useEffect, useContext } from "react";
import {
  SUCCESS_RESPONSE,
  ERROR_RESPONSE,
  ERROR_COLOUR,
  SUCCESS_COLOUR,
} from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { userService } from "../services/user.service";
import { ActivityContext } from "../context/activity/ActivityContext";

export const userHooks = {
  useGetAllUsers,
  useCreateUser,
  useUpdateUser,
};

function useGetAllUsers(userParams) {
  const initialState = { users: [], pageNo: "", pageSize: "", error: "" };
  const [allUsersResponse, setResponse] = useState(initialState);
  const { toggleLoader, toggleNotify } = useContext(ActivityContext);

  function getAllUsers(payload) {
    setResponse(initialState);
    toggleLoader(true);
    return userService.getAllUsers(payload).then((res) => {
      toggleLoader(false);
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        setResponse({
          users: response.responseData.users,
          pageNo: response.responseData.pageNo,
          pageSize: response.responseData.pageSize,
        });
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: response }); //show error message
        toggleNotify({
          icon: "announcement",
          title: "Error!",
          message: response.message ? response.message : response,
          color: ERROR_COLOUR,
        });
      }
    });
  }

  useEffect(() => {
    getAllUsers(userParams);
  }, []);

  return { allUsersResponse, getAllUsers };
}

function useCreateUser(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function createUser(payload) {
    dispatch(apiActions.startRequest());

    return userService.createUser(payload).then((res) => {
      dispatch(apiActions.endRequest());
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        if (response.requestSuccessful) {
          toggleNotify({
            icon: "check",
            title: "Success!",
            message: `${response.responseData.name} has been suceesfully created`,
            color: SUCCESS_COLOUR,
            static: true,
          });
          resetView();
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
        });
      }
    });
  }

  return { ...state, createUser };
}

function useUpdateUser(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function updateUser(payload) {
    dispatch(apiActions.startRequest());

    return userService.updateUser(payload).then((res) => {
      dispatch(apiActions.endRequest());
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        if (response.requestSuccessful) {
          toggleNotify({
            icon: "check",
            title: "Success!",
            message: `${response.responseData.name} has been suceesfully updated`,
            color: SUCCESS_COLOUR,
            static: true,
          });
          resetView();
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
        });
      }
    });
  }

  return { ...state, updateUser };
}
