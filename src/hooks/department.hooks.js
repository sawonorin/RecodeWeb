import { useState, useReducer, useEffect, useContext } from "react";
import {
  SUCCESS_RESPONSE,
  ERROR_RESPONSE,
  ERROR_COLOUR,
  SUCCESS_COLOUR,
} from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { departmentService } from "../services/department.service";
import { ActivityContext } from "../context/activity/ActivityContext";

export const departmentHooks = {
  useGetAllDepartments,
  useCreateDepartment,
  useUpdateDepartment,
};

function useGetAllDepartments(departmentParams) {
  const initialState = { departments: [], pageNo: "", pageSize: "", error: "" };
  const [allDepartmentsResponse, setResponse] = useState(initialState);
  const { toggleLoader, toggleNotify } = useContext(ActivityContext);

  function getAllDepartments(payload) {
    setResponse(initialState);
    toggleLoader(true);
    return departmentService.getAllDepartments(payload).then((res) => {
      toggleLoader(false);
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        setResponse({
          departments: response.responseData.departments,
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
    getAllDepartments(departmentParams);
  }, []);

  return { allDepartmentsResponse, getAllDepartments };
}

function useCreateDepartment(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function createDepartment(payload) {
    dispatch(apiActions.startRequest());

    return departmentService.createDepartment(payload).then((res) => {
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

  return { ...state, createDepartment };
}

function useUpdateDepartment(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function updateDepartment(payload) {
    dispatch(apiActions.startRequest());

    return departmentService.updateDepartment(payload).then((res) => {
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

  return { ...state, updateDepartment };
}
