import { API_REQUEST_START, API_REQUEST_FINISH } from "../constants";

export function apiReducer(state, action) {
  switch (action.type) {
    case API_REQUEST_START:
      return { loading: true };
    case API_REQUEST_FINISH:
      return { loading: false };
    default:
      throw new Error();
  }
}
