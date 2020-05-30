import React from "react";
import { Form } from "semantic-ui-react";

const CompaniesFilter = (props) => {
  const { companyParams, setCompanyParams, getAllCompanies, loading } = props;

  return (
    <Form inverted onSubmit={() => getAllCompanies(companyParams)}>
      <Form.Group widths="equal">
        <Form.Field
          label="Name"
          control="input"
          placeholder="e.g Smite Group"
          value={companyParams.name}
          onChange={(e) =>
            setCompanyParams({
              ...companyParams,
              name: e.target.value,
            })
          }
        />
        <Form.Field
          label="Code"
          control="input"
          placeholder="e.g SG"
          value={companyParams.code}
          onChange={(e) =>
            setCompanyParams({
              ...companyParams,
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
