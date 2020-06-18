import React from "react";
import { Table, Button, Modal } from "semantic-ui-react";
import SaveDepartment from "./SaveDeparment";

const DepartmentsTable = (props) => {
  const {
    loading,
    openUpdate,
    toggleUpdateModal,
    resetModal,
    formParams,
    setFormParams,
    updateDepartment,
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

        {props.allDepartmentsResponse.companies && (
          <Table.Body>
            {props.allDepartmentsResponse.companies.map((item, i) => (
              <Table.Row key={`Departments table row ${i}`}>
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
                    header="Update Department"
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
                        content: "Update Department",
                        positive: true,
                        onClick: () => updateDepartment(),
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

export default DepartmentsTable;
