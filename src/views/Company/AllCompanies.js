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
  const [formParams, setFormParams] = useState({
    name: "",
    code: "",
  });

  const { createCompany } = companyHooks.useCreateCompany();

  const create = () => {
    createCompany(formParams);
    getAllCompanies(filterParams);
  };

  /**Pagination */
  const onPageChange = (value) => {
    setFilterParams({
      ...filterParams,
      pageNo: value,
    });
    getAllCompanies(filterParams);
  };

  console.log(filterParams.pageNo);

  return (
    <div>
      <PageLayout
        title="All Companies"
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
          />
        }
        primaryActions={
          <Modal
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
                // loading,
              },
            ]}
          />
        }
        secondaryActions={
          <Pagination
            activePage={filterParams.pageNo + 1}
            totalPages={5}
            onPageChange={(e, { activePage }) => onPageChange(activePage + 1)}
          />
        }
      />
    </div>
  );
};

export default AllCompanies;
