import { requestsService } from "../helpers/requests.helpers";
import { LOGIN } from "../constants/urls.constants";

export const authService = {
  login,
};

function login(payload) {
  return requestsService.makePostRequest(LOGIN, payload);
}
