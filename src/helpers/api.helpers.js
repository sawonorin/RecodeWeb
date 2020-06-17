import axios from "axios";
import { SMITE_USER } from "../constants";

export const apiHelpers = {
  postRequest,
  getRequest,
  putRequest,
  formatPromiseResponse,
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
  return axios
    .post(url, payload, config)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));
}

function getRequest(url) {
  const header = authHeader();
  let reqHeader = header ? header : { "Content-Type": "application/json" };
  let config = { headers: reqHeader };
  return axios
    .get(url, config)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));
}

function putRequest(url, payload) {
  const header = authHeader();
  let reqHeader = header ? header : { "Content-Type": "application/json" };
  let config = { headers: reqHeader };
  return axios
    .put(url, payload, config)
    .then((res) => res)
    .catch((err) => (err.response ? err.response : err));
}

function formatPromiseResponse(res, resType) {
  return { status: resType, response: res.data ? res.data : res };
}
