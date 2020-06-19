import { requestsService } from "../helpers/requests.helpers";
import {
  UPDATE_USER,
  CREATE_USER,
  GET_ALL_USERS,
  GET_USER_BY_ID,
} from "../constants/urls.constants";

export const userService = {
  createUser,
  updateUser,
  getAllUsers,
  getUserById,
};

function createUser(payload) {
  return requestsService.makePostRequest(`${CREATE_USER}`, payload);
}

function updateUser(payload) {
  return requestsService.makePutRequest(`${UPDATE_USER}`, payload);
}

function getAllUsers(payload) {
  return requestsService.makeGetRequest(
    `${GET_ALL_USERS}?name=${payload.name}&code=${payload.code}&pageSize=${payload.pageSize}&pageNo=${payload.pageNo}`,
    payload
  );
}

function getUserById(payload) {
  return requestsService.makeGetRequest(
    `${GET_USER_BY_ID}/${payload.id}`,
    payload
  );
}
