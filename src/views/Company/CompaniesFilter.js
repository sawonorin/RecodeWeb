import React from "react";
import { Form, Header } from "semantic-ui-react";

const CompaniesFilter = (props) => {
  const { filterParams, setFilterParams, getAllCompanies, loading } = props;

  return (
    <Form inverted onSubmit={() => getAllCompanies(filterParams)}>
      <Header as="h4" style={{ color: "white" }}>
        {props.searchPanelTitle}
      </Header>
      <Form.Group widths="equal">
        <Form.Field
          label="Name"
          control="input"
          placeholder="e.g Smite Group"
          value={filterParams.name}
          onChange={(e) =>
            setFilterParams({
              ...filterParams,
              name: e.target.value,
            })
          }
        />
        <Form.Field
          label="Code"
          control="input"
          placeholder="e.g SG"
          value={filterParams.code}
          onChange={(e) =>
            setFilterParams({
              ...filterParams,
              code: e.target.value,
            })
          }
        />
        <Form.Field width={3}>
          <label style={{ visibility: "hidden" }}>Hidden lablel</label>
          <Form.Button
            loading={loading}
            type="submit"
            content="Filter"
            color="black"
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};

export default CompaniesFilter;
