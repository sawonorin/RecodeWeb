import React from "react";
import { Table, Button, Modal } from "semantic-ui-react";
import SaveCompany from "./SaveCompany";

const CompaniesTable = (props) => {
  const { initialFormParams, formParams, setFormParams, saveCompany } = props;
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
            {props.allCompaniesResponse.companies.map((item) => (
              <Table.Row>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.code}</Table.Cell>
                <Table.Cell>
                  <Modal
                    onClose={() => setFormParams(initialFormParams)}
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
                        content: "Update Company",
                        positive: true,
                        onClick: () => saveCompany(),
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
