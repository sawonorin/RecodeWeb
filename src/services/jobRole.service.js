import { requestsService } from "../helpers/requests.helpers";
import {
  CREATE_JOBROLE,
  UPDATE_JOBROLE,
  GET_ALL_JOBROLES,
  GET_JOBROLE_BY_ID,
} from "../constants/urls.constants";

export const jobRoleService = {
  createJobRole,
  updateJobRole,
  getAllJobRoles,
  getJobRoleById,
};

function createJobRole(payload) {
  return requestsService.makePostRequest(`${CREATE_JOBROLE}`, payload);
}

function updateJobRole(payload) {
  return requestsService.makePutRequest(`${UPDATE_JOBROLE}`, payload);
}

function getAllJobRoles(payload) {
  return requestsService.makeGetRequest(
    `${GET_ALL_JOBROLES}?name=${payload.name}&code=${payload.code}&pageSize=${payload.pageSize}&pageNo=${payload.pageNo}`,
    payload
  );
}

function getJobRoleById(payload) {
  return requestsService.makeGetRequest(
    `${GET_JOBROLE_BY_ID}/${payload.id}`,
    payload
  );
}
