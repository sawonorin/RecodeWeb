import axios from "axios";
import { SUCCESS_RESPONSE, SMITE_USER } from "../constants";

export const apiHelpers = {
  postRequest,
  getRequest,
  putRequest,
  formatPromiseResponse,
  interpretErrorResponse,
  formatSuccessResponse,
};

function authHeader() {
  let user = JSON.parse(localStorage.getItem(SMITE_USER));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}

function postRequest(url, payload) {
  const header = authHeader();
  let reqHeader = header ? header : { "Content-Type": "application/json" };
  let config = { headers: reqHeader };
  return axios.post(url, payload, config);
}

function getRequest(url) {
  const header = authHeader();
  let reqHeader = header ? header : { "Content-Type": "application/json" };
  let config = { headers: reqHeader };
  return axios
    .get(url, config)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      return err;
    });
}

function putRequest(url, payload) {
  const header = authHeader();
  let reqHeader = header ? header : { "Content-Type": "application/json" };
  let config = { headers: reqHeader };
  return axios.put(url, payload, config);
}

function formatPromiseResponse(res, resType) {
  let responseType = resType === undefined ? SUCCESS_RESPONSE : resType;
  return { status: responseType, response: res };
}

function formatSuccessResponse(res, resType) {
  let responseType = resType === undefined ? SUCCESS_RESPONSE : resType;
  return { status: responseType, response: res.data.responseData };
}

function interpretErrorResponse(error) {
  let errorMessage = "";
  if (error.response === undefined) {
    errorMessage = "Please check your internet connectivity!";
  } else {
    errorMessage = error.response.data
      ? error.response.data.message
        ? error.response.data.message
        : error.response.data
      : "Unable to handle request";
  }
  if (typeof errorMessage === "string") {
    return errorMessage;
  } else {
    return "Something went wrong!";
  }
}
