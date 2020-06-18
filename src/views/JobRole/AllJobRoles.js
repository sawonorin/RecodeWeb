import React, { useState } from "react";
import { Pagination, Button, Modal } from "semantic-ui-react";
import PageLayout from "../../components/layouts/PageLayout";
import JobRolesTable from "./JobRolesTable";
import { jobRoleHooks } from "../../hooks";
import JobRolesFilter from "./JobRolesFilter";
import SaveJobRole from "./SaveJobRole";
import { validationHelper } from "../../helpers";

const AllJobRoles = () => {
  /** Filter */
  const [filterParams, setFilterParams] = useState({
    name: "",
    code: "",
    pageSize: 20,
    pageNo: 0,
  });

  const {
    allJobRolesResponse,
    getAllJobRoles,
  } = jobRoleHooks.useGetAllJobRoles(filterParams);

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
    getAllJobRoles(filterParams);
    resetModal();
  };

  const resetModal = () => {
    setFormParams(initialFormParams);
    toggleCreateModal(false);
    toggleUpdateModal(false);
    setFormErrors({});
  };

  /** Create JobRole */
  const { loading, createJobRole } = jobRoleHooks.useCreateJobRole(resetView);

  /** Update JobRole */
  const { loading: loading2, updateJobRole } = jobRoleHooks.useUpdateJobRole(
    resetView
  );

  /**Pagination */
  const onPageChange = (value) => {
    setFilterParams({
      ...filterParams,
      pageNo: value,
    });
    getAllJobRoles(filterParams);
  };

  /**validation */
  const [formErrors, setFormErrors] = useState({});

  const validateFormInputs = () => {
    const { validateNonEmptyString, isFormValid } = validationHelper;
    let error = {
      name: validateNonEmptyString(formParams.name),
      code: validateNonEmptyString(formParams.code),
    };
    setFormErrors(error);
    return isFormValid(error);
  };

  /**Actions */
  const create = () => {
    if (validateFormInputs()) {
      return createJobRole(formParams);
    }
  };

  const update = () => {
    if (validateFormInputs()) {
      return updateJobRole(formParams);
    }
  };

  return (
    <PageLayout
      title="Job Roles"
      searchPanel={
        <JobRolesFilter
          searchPanelTitle="Filter Job Roles"
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          getAllJobRoles={getAllJobRoles}
        />
      }
      body={
        <JobRolesTable
          loading={loading2}
          allJobRolesResponse={allJobRolesResponse}
          formParams={formParams}
          setFormParams={setFormParams}
          updateJobRole={() => update()}
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
          trigger={<Button color="purple">Add Job Role</Button>}
          header="Add jobRole"
          content={
            <div style={{ margin: "20px" }}>
              <SaveJobRole
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
              content: "Add Job Role",
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

export default AllJobRoles;
