import { API_REQUEST_START, API_REQUEST_FINISH } from "../constants";

export function apiReducer(state, action) {
  switch (action.type) {
    case API_REQUEST_START:
      return { count: state.count + 1 };
    case API_REQUEST_FINISH:
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload }; //initial State
    default:
      throw new Error();
  }
}
