import React, { useState } from "react";
import { Pagination, Button, Modal } from "semantic-ui-react";
import PageLayout from "../../components/layouts/PageLayout";
import CompaniesTable from "./CompaniesTable";
import { companyHooks } from "../../hooks";
import CompaniesFilter from "./CompaniesFilter";
import SaveCompany from "./SaveCompany";
import { validationHelper } from "../../helpers";

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

  /**Reset view */
  const initialFormParams = {
    id: null,
    name: "",
    code: "",
  };

  const [formParams, setFormParams] = useState(initialFormParams);
  const [open, toggleModal] = useState(false);

  const resetView = () => {
    getAllCompanies(filterParams);
    setFormParams(initialFormParams);
    toggleModal(false);
  };

  /** Create Company */
  const { createCompany } = companyHooks.useCreateCompany(resetView);

  /** Update Company */
  const { updateCompany } = companyHooks.useUpdateCompany(resetView);

  /**Pagination */
  const onPageChange = (value) => {
    setFilterParams({
      ...filterParams,
      pageNo: value,
    });
    getAllCompanies(filterParams);
  };

  const [formErrors, setFormErrors] = useState({});

  /**validation */
  const validateFormInputs = () => {
    const { validateNonEmptyString, isFormValid } = validationHelper;
    let error = {
      name: validateNonEmptyString(formParams.name),
      code: validateNonEmptyString(formParams.code),
    };
    console.log(error);
    setFormErrors(error);
    return isFormValid(formErrors);
  };

  const create = () => {
    // if (validateFormInputs) {
    //   return;
    // }
    createCompany(formParams);
  };

  const update = () => {
    // if (validateFormInputs) {
    //   return;
    // }
    updateCompany(formParams);
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
          updateCompany={() => update()}
          initialFormParams={initialFormParams}
          formErrors={formErrors}
        />
      }
      primaryActions={
        <Modal
          open={open}
          onOpen={toggleModal}
          onClose={() => setFormParams(initialFormParams)}
          size="mini"
          trigger={<Button color="purple">Add Company</Button>}
          header="Add company"
          content={
            <div style={{ margin: "20px" }}>
              <SaveCompany
                formParams={formParams}
                setFormParams={setFormParams}
                formErrors={formErrors}
              />
            </div>
          }
          actions={[
            {
              key: "Cancel",
              content: "Cancel",
              onClick: () => toggleModal(false),
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
