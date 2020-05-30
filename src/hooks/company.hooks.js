import { useState, useReducer, useEffect } from "react";
import { SUCCESS_RESPONSE, ERROR_RESPONSE } from "../constants";
import { apiReducer } from "../reducers";
import { apiActions } from "../actions";
import { companyService } from "../services/company.service";

export const companyHooks = {
  useGetAllCompanies,
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
