import { useState, useReducer, useEffect, useContext } from "react";
import {
  SUCCESS_RESPONSE,
  ERROR_RESPONSE,
  ERROR_COLOUR,
  SUCCESS_COLOUR,
} from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { companyService } from "../services/company.service";
import { ActivityContext } from "../context/activity/ActivityContext";

export const companyHooks = {
  useGetAllCompanies,
  useCreateCompany,
  useUpdateCompany,
};

function useGetAllCompanies(companyParams) {
  const initialState = { companies: [], pageNo: "", pageSize: "", error: "" };
  const [allCompaniesResponse, setResponse] = useState(initialState);
  const { toggleLoader, toggleNotify } = useContext(ActivityContext);

  function getAllCompanies(payload) {
    setResponse(initialState);
    toggleLoader(true);
    return companyService.getAllCompanies(payload).then((res) => {
      toggleLoader(false);
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        setResponse({
          companies: response.responseData.companys,
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
    getAllCompanies(companyParams);
  }, []);

  return { allCompaniesResponse, getAllCompanies };
}

function useCreateCompany(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function createCompany(payload) {
    dispatch(apiActions.startRequest());

    return companyService.createCompany(payload).then((res) => {
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

  return { ...state, createCompany };
}

function useUpdateCompany(resetView) {
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function updateCompany(payload) {
    dispatch(apiActions.startRequest());

    return companyService.updateCompany(payload).then((res) => {
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

  return { ...state, updateCompany };
}
