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
import Hiring from "../../assets/images/hiring.jpg";

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
    <Grid
      textAlign="center"
      style={{
        height: "100vh",
        backgroundImage: `url(${Hiring})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "purple",
        // backgroundBlendMode: "soft-light",
        margin: 0,
      }}
    >
      <Grid.Column
        className="bounce-in-top"
        style={{
          animationDelay:"1s",
          animationDuration: "3s",
          animationIterationCount: "1",
          maxWidth: 400,
          minHeight: 400,
          paddingTop: "60px",
          borderRadius: "15px",
          background:
            "linear-gradient(to bottom, purple -50%, rgba(0,0,0,0.6) 100%)",
          position: "absolute",
          top: "10%",
          left: "10%",
        }}
      >
        <Header as="h2" inverted textAlign="center">
          {/*<Image src='/logo.png' />*/} Login
        </Header>

        {loginResponse.error && visible && (
          <Message error onDismiss={() => setVisibility(false)}>
            {loginResponse.error}
          </Message>
        )}

        <Form size="large" onSubmit={() => handleLogin()}>
          <Segment
            stacked
            style={{
              background: "transparent",
              border: "transparent",
            }}
          >
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
              color="purple"
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
          New to us? <a href="/">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
