import { requestsService } from "../helpers/requests.helpers";
import {
  UPDATE_DEPARTMENT,
  CREATE_DEPARTMENT,
  GET_ALL_DEPARTMENTS,
  GET_DEPARTMENT_BY_ID,
} from "../constants/urls.constants";

export const departmentService = {
  createDepartment,
  updateDepartment,
  getAllDepartments,
  getDepartmentById,
};

function createDepartment(payload) {
  return requestsService.makePostRequest(`${CREATE_DEPARTMENT}`, payload);
}

function updateDepartment(payload) {
  return requestsService.makePutRequest(`${UPDATE_DEPARTMENT}`, payload);
}

function getAllDepartments(payload) {
  return requestsService.makeGetRequest(
    `${GET_ALL_DEPARTMENTS}?name=${payload.name}&code=${payload.code}&pageSize=${payload.pageSize}&pageNo=${payload.pageNo}`,
    payload
  );
}

function getDepartmentById(payload) {
  return requestsService.makeGetRequest(
    `${GET_DEPARTMENT_BY_ID}/${payload.id}`,
    payload
  );
}
