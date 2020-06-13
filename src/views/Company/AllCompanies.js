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
  const [openCreate, toggleCreateModal] = useState(false);
  const [openUpdate, toggleUpdateModal] = useState(false);

  const resetView = () => {
    getAllCompanies(filterParams);
    resetModal();
  };

  const resetModal = () => {
    setFormParams(initialFormParams);
    toggleCreateModal(false);
    toggleUpdateModal(false);
  };

  /** Create Company */
  const { loading, createCompany } = companyHooks.useCreateCompany(resetView);

  /** Update Company */
  const { loading: loading2, updateCompany } = companyHooks.useUpdateCompany(
    resetView
  );

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
    console.log({ error });
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
        />
      }
      body={
        <CompaniesTable
          loading={loading2}
          allCompaniesResponse={allCompaniesResponse}
          formParams={formParams}
          setFormParams={setFormParams}
          updateCompany={() => update()}
          formErrors={formErrors}
          resetModal={() => resetModal()}
          openUpdate={openUpdate}
          toggleUpdateModal={toggleUpdateModal}
        />
      }
      primaryActions={
        <Modal
          open={openCreate}
          onOpen={() => toggleCreateModal(true)}
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
              onClick: () => resetModal(),
            },
            {
              key: "done",
              content: "Add Company",
              positive: true,
              onClick: () => create(),
              loading,
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
