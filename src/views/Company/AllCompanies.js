import React, { useState } from "react";
import { Pagination, Button, Modal } from "semantic-ui-react";
import PageLayout from "../../components/layouts/PageLayout";
import CompaniesTable from "./CompaniesTable";
import { companyHooks } from "../../hooks";
import CompaniesFilter from "./CompaniesFilter";
import SaveCompany from "./SaveCompany";

const AllCompanies = () => {
  /** Filter */
  const [filterParams, setFilterParams] = useState({
    name: "",
    code: "",
    pageSize: 20,
    pageNo: 0,
  });

  const {
    loading,
    allCompaniesResponse,
    getAllCompanies,
  } = companyHooks.useGetAllCompanies(filterParams);

  /** Create */
  const initialFormParams = {
    id: "",
    name: "",
    code: "",
  };

  const [formParams, setFormParams] = useState(initialFormParams);

  const { createCompany } = companyHooks.useCreateCompany();

  const create = () => {
    createCompany(formParams);
    getAllCompanies(filterParams);
    setFormParams(initialFormParams);
  };

  //Update Company
  const { updateCompany } = companyHooks.useUpdateCompany();

  const update = () => {
    updateCompany(formParams);
    getAllCompanies(filterParams);
    setFormParams(initialFormParams);
  };

  /**Pagination */
  const onPageChange = (value) => {
    setFilterParams({
      ...filterParams,
      pageNo: value,
    });
    getAllCompanies(filterParams);
  };

  return (
    <PageLayout
      title="Companies"
      searchPanel={
        <CompaniesFilter
          searchPanelTitle="Filter Companies"
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          getAllCompanies={getAllCompanies}
          loading={loading}
        />
      }
      body={
        <CompaniesTable
          loading={loading}
          allCompaniesResponse={allCompaniesResponse}
          formParams={formParams}
          setFormParams={setFormParams}
          saveCompany={update}
          initialFormParams={initialFormParams}
        />
      }
      primaryActions={
        <Modal
          onClose={() => setFormParams(initialFormParams)}
          size="mini"
          trigger={<Button color="purple">Add Company</Button>}
          header="Add company"
          content={
            <div style={{ margin: "20px" }}>
              <SaveCompany
                formParams={formParams}
                setFormParams={setFormParams}
              />
            </div>
          }
          actions={[
            {
              key: "Cancel",
              content: "Cancel",
            },
            {
              key: "done",
              content: "Add Company",
              positive: true,
              onClick: () => create(),
            },
          ]}
        />
      }
      secondaryActions={
        <Pagination
          activePage={filterParams.pageNo}
          totalPages={5}
          onPageChange={(e, { activePage }) => onPageChange(activePage)}
        />
      }
    />
  );
};

export default AllCompanies;
