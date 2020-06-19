import React from "react";
import { Table, Button, Modal } from "semantic-ui-react";
import SaveUser from "./SaveUser";

const UsersTable = (props) => {
  const {
    loading,
    openUpdate,
    toggleUpdateModal,
    resetModal,
    formParams,
    setFormParams,
    updateUser,
    formErrors,
  } = props;
  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Code</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {props.allUsersResponse.companies && (
          <Table.Body>
            {props.allUsersResponse.companies.map((item, i) => (
              <Table.Row key={`Users table row ${i}`}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.code}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>
                  <Modal
                    open={openUpdate}
                    onOpen={() => toggleUpdateModal(true)}
                    size="mini"
                    trigger={
                      <Button
                        icon="edit"
                        label="Edit"
                        onClick={() => setFormParams(item)}
                      />
                    }
                    header="Update User"
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
                        content: "Update User",
                        positive: true,
                        onClick: () => updateUser(),
                        loading,
                      },
                    ]}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        )}
      </Table>
    </div>
  );
};

export default UsersTable;
