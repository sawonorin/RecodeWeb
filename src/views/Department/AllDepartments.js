import React, { useState } from "react";
import { Pagination, Button, Modal } from "semantic-ui-react";
import PageLayout from "../../components/layouts/PageLayout";
import DepartmentsTable from "./DepartmentsTable";
import { departmentHooks } from "../../hooks";
import DepartmentsFilter from "./DepartmentsFilter";
import SaveDepartment from "./SaveDeparment";
import { validationHelper } from "../../helpers";

const AllDepartments = () => {
  /** Filter */
  const [filterParams, setFilterParams] = useState({
    name: "",
    code: "",
    pageSize: 20,
    pageNo: 0,
  });

  const {
    allDepartmentsResponse,
    getAllDepartments,
  } = departmentHooks.useGetAllDepartments(filterParams);

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
    getAllDepartments(filterParams);
    resetModal();
  };

  const resetModal = () => {
    setFormParams(initialFormParams);
    toggleCreateModal(false);
    toggleUpdateModal(false);
    setFormErrors({});
  };

  /** Create Department */
  const { loading, createDepartment } = departmentHooks.useCreateDepartment(resetView);

  /** Update Department */
  const { loading: loading2, updateDepartment } = departmentHooks.useUpdateDepartment(
    resetView
  );

  /**Pagination */
  const onPageChange = (value) => {
    setFilterParams({
      ...filterParams,
      pageNo: value,
    });
    getAllDepartments(filterParams);
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
      return createDepartment(formParams);
    }
  };

  const update = () => {
    if (validateFormInputs()) {
      return updateDepartment(formParams);
    }
  };

  return (
    <PageLayout
      title="Departments"
      searchPanel={
        <DepartmentsFilter
          searchPanelTitle="Filter Departments"
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          getAllDepartments={getAllDepartments}
        />
      }
      body={
        <DepartmentsTable
          loading={loading2}
          allDepartmentsResponse={allDepartmentsResponse}
          formParams={formParams}
          setFormParams={setFormParams}
          updateDepartment={() => update()}
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
          trigger={<Button color="purple">Add Department</Button>}
          header="Add department"
          content={
            <div style={{ margin: "20px" }}>
              <SaveDepartment
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
              content: "Add Department",
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

export default AllDepartments;
