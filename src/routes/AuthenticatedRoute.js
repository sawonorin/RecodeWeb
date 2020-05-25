import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SMITE_USER } from "../constants";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem(SMITE_USER) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
