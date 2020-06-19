import React, { useState } from "react";
import { Pagination, Button, Modal } from "semantic-ui-react";
import PageLayout from "../../components/layouts/PageLayout";
import UsersTable from "./UsersTable";
import { userHooks } from "../../hooks";
import UsersFilter from "./UsersFilter";
import SaveUser from "./SaveUser";
import { validationHelper } from "../../helpers";

const AllUsers = () => {
  /** Filter */
  const [filterParams, setFilterParams] = useState({
    name: "",
    code: "",
    pageSize: 20,
    pageNo: 0,
  });

  const {
    allUsersResponse,
    getAllUsers,
  } = userHooks.useGetAllUsers(filterParams);

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
    getAllUsers(filterParams);
    resetModal();
  };

  const resetModal = () => {
    setFormParams(initialFormParams);
    toggleCreateModal(false);
    toggleUpdateModal(false);
    setFormErrors({});
  };

  /** Create User */
  const { loading, createUser } = userHooks.useCreateUser(resetView);

  /** Update User */
  const { loading: loading2, updateUser } = userHooks.useUpdateUser(
    resetView
  );

  /**Pagination */
  const onPageChange = (value) => {
    setFilterParams({
      ...filterParams,
      pageNo: value,
    });
    getAllUsers(filterParams);
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
      return createUser(formParams);
    }
  };

  const update = () => {
    if (validateFormInputs()) {
      return updateUser(formParams);
    }
  };

  return (
    <PageLayout
      title="Users"
      searchPanel={
        <UsersFilter
          searchPanelTitle="Filter Users"
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          getAllUsers={getAllUsers}
        />
      }
      body={
        <UsersTable
          loading={loading2}
          allUsersResponse={allUsersResponse}
          formParams={formParams}
          setFormParams={setFormParams}
          updateUser={() => update()}
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
          trigger={<Button color="purple">Add User</Button>}
          header="Add user"
          content={
            <div style={{ margin: "20px" }}>
              <SaveUser
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
              content: "Add User",
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

export default AllUsers;
