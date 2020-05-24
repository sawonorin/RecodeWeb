import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  // Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { authHooks } from "../../hooks/auth.hooks";

const LoginForm = () => {
  const [loginFormParams, setLoginFormParams] = useState({
    email: "",
    password: "",
  });
  const { loading, loginResponse, login } = authHooks.useLogin();
  const [visible, setVisibility] = useState(false);

  const handleLogin = () => {
    login(loginFormParams);
    setVisibility(true);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          {/*<Image src='/logo.png' />*/} Log-in to your account
        </Header>

        {loginResponse.error && visible && (
          <Message error onDismiss={() => setVisibility(false)}>
            {loginResponse.error}
          </Message>
        )}

        <Form size="large" onSubmit={() => handleLogin()}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={loginFormParams.email}
              onChange={(e) =>
                setLoginFormParams({
                  ...loginFormParams,
                  email: e.target.value,
                })
              }
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={loginFormParams.password}
              onChange={(e) =>
                setLoginFormParams({
                  ...loginFormParams,
                  password: e.target.value,
                })
              }
            />

            <Button
              color="teal"
              fluid
              size="large"
              type="submit"
              loading={loading}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
