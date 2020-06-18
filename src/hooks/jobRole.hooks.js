import { useState, useReducer, useEffect, useContext } from "react";
import {
  SUCCESS_RESPONSE,
  ERROR_RESPONSE,
  ERROR_COLOUR,
  SUCCESS_COLOUR,
} from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { jobRoleService } from "../services/jobRole.service";
import { ActivityContext } from "../context/activity/ActivityContext";

export const jobRoleHooks = {
  useGetAllJobRoles,
  useCreateJobRole,
  useUpdateJobRole,
};

function useGetAllJobRoles(companyParams) {
  const initialState = { jobRoles: [], pageNo: "", pageSize: "", error: "" };
  const [allJobRolesResponse, setResponse] = useState(initialState);
  const { toggleLoader, toggleNotify } = useContext(ActivityContext);

  function getAllJobRoles(payload) {
    setResponse(initialState);
    toggleLoader(true);
    return jobRoleService.getAllJobRoles(payload).then((res) => {
      toggleLoader(false);
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        setResponse({
          jobRoles: response.responseData.companys,
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
    getAllJobRoles(companyParams);
  }, []);

  return { allJobRolesResponse, getAllJobRoles };
}

function useCreateJobRole(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function createJobRole(payload) {
    dispatch(apiActions.startRequest());

    return jobRoleService.createJobRole(payload).then((res) => {
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

  return { ...state, createJobRole };
}

function useUpdateJobRole(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function updateJobRole(payload) {
    dispatch(apiActions.startRequest());

    return jobRoleService.updateJobRole(payload).then((res) => {
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

  return { ...state, updateJobRole };
}
