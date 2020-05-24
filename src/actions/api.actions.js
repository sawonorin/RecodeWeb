import {
  API_REQUEST_START,
  API_REQUEST_FINISH,
} from "../constants/types.constants";

export const apiActions = {
  startRequest,
  endRequest,
};

function startRequest() {
  return { type: API_REQUEST_START };
}
function endRequest() {
  return { type: API_REQUEST_FINISH };
}
