import React from "react";
import { Form } from "semantic-ui-react";

const SaveCompany = (props) => {
  const { formParams, setFormParams } = props;

  return (
    <Form>
      <Form.Field
        label="Name"
        control="input"
        placeholder="e.g Smite Group"
        value={formParams.name}
        onChange={(e) =>
          setFormParams({
            ...formParams,
            name: e.target.value,
          })
        }
      />
      <Form.Field
        label="Code"
        control="input"
        placeholder="e.g SMG"
        value={formParams.code}
        onChange={(e) =>
          setFormParams({
            ...formParams,
            code: e.target.value,
          })
        }
      />
    </Form>
  );
};

export default SaveCompany;
