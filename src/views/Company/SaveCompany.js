import React from "react";
import { Form } from "semantic-ui-react";

const SaveCompany = (props) => {
  return (
    <Form>
        <Form.Field
          label="Name"
          control="input"
          placeholder="e.g Smite Group"
        />
        <Form.Field label="Code" control="input" placeholder="e.g SMG" />
    </Form>
  );
};

export default SaveCompany;
