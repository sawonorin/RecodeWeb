import { apiHelpers } from "./api.helpers";
import {
  ERROR_RESPONSE,
  REACT_APP_BASE_API_URL,
  SUCCESS_RESPONSE,
} from "../constants";

export const requestsService = {
  makeGetRequest,
  makePostRequest,
  makePutRequest,
};

/**
 * @param {String} requestUrl
 */
function makeGetRequest(requestUrl) {
  return apiHelpers
    .getRequest(`${REACT_APP_BASE_API_URL}${requestUrl}`)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return apiHelpers.formatPromiseResponse(response, SUCCESS_RESPONSE);
      }
      return apiHelpers.formatPromiseResponse(response, ERROR_RESPONSE);
    })
    .catch((error) => {
      return apiHelpers.formatPromiseResponse(error, ERROR_RESPONSE);
    });
}

/**
 *
 * @param {string} requestUrl
 * @param {*} payload
 */
function makePostRequest(requestUrl, payload) {
  return apiHelpers
    .postRequest(`${REACT_APP_BASE_API_URL}${requestUrl}`, payload)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return apiHelpers.formatPromiseResponse(response, SUCCESS_RESPONSE);
      }
      return apiHelpers.formatPromiseResponse(response, ERROR_RESPONSE);
    })
    .catch((error) => {
      return apiHelpers.formatPromiseResponse(error, ERROR_RESPONSE);
    });
}

/**
 *
 * @param {string} requestUrl
 * @param {*} payload
 */
function makePutRequest(requestUrl, payload) {
  return apiHelpers
    .putRequest(`${REACT_APP_BASE_API_URL}${requestUrl}`, payload)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return apiHelpers.formatPromiseResponse(response, SUCCESS_RESPONSE);
      }
      return apiHelpers.formatPromiseResponse(response, ERROR_RESPONSE);
    })
    .catch((error) => {
      return apiHelpers.formatPromiseResponse(error, ERROR_RESPONSE);
    });
}
