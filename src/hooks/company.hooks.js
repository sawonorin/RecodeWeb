import { useState, useReducer, useEffect } from "react";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { companyService } from "../services/company.service";

export const companyHooks = {
  useGetAllCompanies,
  useCreateCompany,
  useUpdateCompany,
};

function useGetAllCompanies(companyParams) {
  const initialState = { companies: [], pageNo: "", pageSize: "", error: "" };
  const [allCompaniesResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function getAllCompanies(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return companyService.getAllCompanies(payload).then((res) => {
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
    getAllCompanies(companyParams);
  }, []);

  return { ...state, allCompaniesResponse, getAllCompanies };
}

function useCreateCompany(resetView) {
  const initialState = { company: "", error: "" };
  const [createCompanyResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function createCompany(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return companyService.createCompany(payload).then((res) => {
      dispatch(apiActions.endRequest());

      if (res.status === SUCCESS_RESPONSE) {
        setResponse({ company: res.response });
        resetView();
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
      }
    });
  }

  return { ...state, createCompanyResponse, createCompany };
}

function useUpdateCompany(resetView) {
  const initialState = { company: "", error: "" };
  const [updateCompanyResponse, setResponse] = useState(initialState);
  const [state, dispatch] = useReducer(apiReducer, { loading: false });

  function updateCompany(payload) {
    setResponse(initialState);
    dispatch(apiActions.startRequest());

    return companyService.updateCompany(payload).then((res) => {
      dispatch(apiActions.endRequest());

      if (res.status === SUCCESS_RESPONSE) {
        setResponse({ company: res.response });
        resetView();
      }
      if (res.status === ERROR_RESPONSE) {
        setResponse({ error: res.response });
      }
    });
  }

  return { ...state, updateCompanyResponse, updateCompany };
}
