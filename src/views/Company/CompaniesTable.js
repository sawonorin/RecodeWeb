import React from "react";
import { Table, Popup, Button } from "semantic-ui-react";

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
                  <Popup content="Edit" trigger={<Button icon="edit"/>} />
                  <Popup content="View" trigger={<Button icon="eye" />} />
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
