import { requestsService } from "../helpers/requests.helpers";
import {
  GET_ALL_COMPANIES,
  GET_COMPANY_BY_ID,
  CREATE_COMPANY,
  UPDATE_COMPANY,
} from "../constants/urls.constants";

export const companyService = {
  createCompany,
  updateCompany,
  getAllCompanies,
  getCompanyById,
};

function createCompany(payload) {
  return requestsService.makePostRequest(`${CREATE_COMPANY}`, payload);
}

function updateCompany(payload) {
  return requestsService.makePostRequest(`${UPDATE_COMPANY}`, payload);
}

function getAllCompanies(payload) {
  return requestsService.makeGetRequest(
    `${GET_ALL_COMPANIES}?name=${payload.name}&code=${payload.code}&pageSize=${payload.pageSize}&pageNo=${payload.pageNo}`,
    payload
  );
}

function getCompanyById(payload) {
  return requestsService.makeGetRequest(
    `${GET_COMPANY_BY_ID}/${payload.id}`,
    payload
  );
}
