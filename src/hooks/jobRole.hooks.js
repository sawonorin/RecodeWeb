import { useState, useReducer, useEffect } from "react";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { jobRoleService } from "../services/jobRole.service";

export const jobRoleHooks = {
  useGetAllJobRoles,
  useCreateJobRole,
  useUpdateJobRole
};

function useGetAllJobRoles(companyParams) {
  const initialState = { companies: [], pageNo: "", pageSize: "", error: "" };
  const [allJobRolesResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function getAllJobRoles(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return jobRoleService.getAllJobRoles(payload).then((res) => {
      dispatch(apiActions.endRequest());
      if (res.status === SUCCESS_RESPONSE) {
        setResponse({
          companies: res.response.companys,
          pageNo: res.response.pageNo,
          pageSize: res.response.pageSize,
        });
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response }); //show error message
      }
    });
  }

  useEffect(() => {
    getAllJobRoles(companyParams);
  }, []);

  return { ...state, allJobRolesResponse, getAllJobRoles };
}

function useCreateJobRole() {
  const initialState = { department: "", error: "" };
  const [createJobRoleResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function createJobRole(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return jobRoleService.createJobRole(payload).then((res) => {
      dispatch(apiActions.endRequest());

      if (res.status === SUCCESS_RESPONSE) {
        setResponse({ department: res.response });
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
      }
    });
  }

  return { ...state, createJobRoleResponse, createJobRole };
}

function useUpdateJobRole() {
  const initialState = { department: "", error: "" };
  const [updateJobRoleResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function updateJobRole(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return jobRoleService.updateJobRole(payload).then((res) => {
      dispatch(apiActions.endRequest());

      if (res.status === SUCCESS_RESPONSE) {
        setResponse({ department: res.response });
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
      }
    });
  }

  return { ...state, updateJobRoleResponse, updateJobRole };
}