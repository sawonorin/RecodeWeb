import { requestsService } from "../helpers/requests.helpers";
import {
  GET_ALL_COMPANIES,
  GET_COMPANY_BY_ID,
} from "../constants/urls.constants";

export const companyService = {
  getAllCompanies,
  getCompanyById,
};

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
