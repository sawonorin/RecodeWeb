import { SMITE_USER } from "../constants";

export function authHeader() {
  let user = JSON.parse(localStorage.getItem(SMITE_USER));

  if (user && user.access_token) {
    return { Authorization: `Bearer ${user.access_token}` };
  }
  return {};
}
