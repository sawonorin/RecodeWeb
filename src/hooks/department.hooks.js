import { useState, useReducer, useEffect } from "react";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { departmentService } from "../services/department.service";

export const departmentHooks = {
  useGetAllDepartments,
  useCreateDepartment,
  useUpdateDepartment
};

function useGetAllDepartments(companyParams) {
  const initialState = { companies: [], pageNo: "", pageSize: "", error: "" };
  const [allDepartmentsResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function getAllDepartments(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return departmentService.getAllDepartments(payload).then((res) => {
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
    getAllDepartments(companyParams);
  }, []);

  return { ...state, allDepartmentsResponse, getAllDepartments };
}

function useCreateDepartment() {
  const initialState = { department: "", error: "" };
  const [createDepartmentResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function createDepartment(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return departmentService.createDepartment(payload).then((res) => {
      dispatch(apiActions.endRequest());

      if (res.status === SUCCESS_RESPONSE) {
        setResponse({ department: res.response });
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
      }
    });
  }

  return { ...state, createDepartmentResponse, createDepartment };
}

function useUpdateDepartment() {
  const initialState = { department: "", error: "" };
  const [updateDepartmentResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function updateDepartment(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return departmentService.updateDepartment(payload).then((res) => {
      dispatch(apiActions.endRequest());

      if (res.status === SUCCESS_RESPONSE) {
        setResponse({ department: res.response });
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
      }
    });
  }

  return { ...state, updateDepartmentResponse, updateDepartment };
}