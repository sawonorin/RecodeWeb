import React from "react";
import { Table, Button, Modal } from "semantic-ui-react";
import SaveCompany from "./SaveCompany";

const CompaniesTable = (props) => {
  return (
    <div>
      <Table singleLine>
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
                    size="mini"
                    trigger={<Button icon="edit" label="Edit" />}
                    header="Update company"
                    content={
                      <div style={{ margin: "20px" }}>
                        <SaveCompany />
                      </div>
                    }
                    actions={[
                      "Cancel",
                      { key: "done", content: "Update Company", positive: true },
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
