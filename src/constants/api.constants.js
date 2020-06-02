export const REACT_APP_BASE_API_URL =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
    ? "http://recodeapi.staging.vggdev.com/api/"
    : window.env.baseApiUrl;
export const SUCCESS_RESPONSE = "1";
export const ERROR_RESPONSE = "2";
