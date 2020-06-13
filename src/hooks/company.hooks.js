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
          companies: response.companys,
          pageNo: response.pageNo,
          pageSize: response.pageSize,
        });
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: response }); //show error message
        toggleNotify({
          icon: "announcement",
          title: "Error!",
          message: response,
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
  const initialState = { company: "", error: "" };
  const [createCompanyResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function createCompany(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return companyService.createCompany(payload).then((res) => {
      dispatch(apiActions.endRequest());
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        toggleNotify({
          icon: "announcement",
          title: "Success!",
          message: `${response.name} has been suceesfully created`,
          color: SUCCESS_COLOUR,
          static: true,
        });
        resetView();
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
        toggleNotify({
          icon: "announcement",
          title: "Error!",
          message: response,
          color: ERROR_COLOUR,
          static: true,
        });
      }
    });
  }

  return { ...state, createCompanyResponse, createCompany };
}

function useUpdateCompany(resetView) {
  const initialState = { company: "", error: "" };
  const [updateCompanyResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });
  const { toggleNotify } = useContext(ActivityContext);

  function updateCompany(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return companyService.updateCompany(payload).then((res) => {
      dispatch(apiActions.endRequest());
      let response = res.response;
      if (res.status === SUCCESS_RESPONSE) {
        toggleNotify({
          icon: "announcement",
          title: "Success!",
          message: `${response.name} has been suceesfully created`,
          color: SUCCESS_COLOUR,
          static: true,
        });
        resetView();
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
        toggleNotify({
          icon: "announcement",
          title: "Error!",
          message: response,
          color: ERROR_COLOUR,
        });
      }
    });
  }

  return { ...state, updateCompanyResponse, updateCompany };
}
