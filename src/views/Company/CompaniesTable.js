import React from "react";
import { Table, Button, Modal } from "semantic-ui-react";
import SaveCompany from "./SaveCompany";

const CompaniesTable = (props) => {
  const {
    loading,
    openUpdate,
    toggleUpdateModal,
    resetModal,
    formParams,
    setFormParams,
    updateCompany,
    formErrors,
  } = props;
  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Code</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {props.allCompaniesResponse.companies && (
          <Table.Body>
            {props.allCompaniesResponse.companies.map((item, i) => (
              <Table.Row key={`Companies table row ${i}`}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.code}</Table.Cell>
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
                    header="Update company"
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
                        content: "Update Company",
                        positive: true,
                        onClick: () => updateCompany(),
                        loading
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

export default CompaniesTable;
