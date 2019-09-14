import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../views/Login";
import ResetPassword from "../../views/ResetPassword";
import ForgotPassword from "../../views/ForgotPassword";

const authRoutes = (
  <Switch>
    <Route component={Login} path="/auth/login" />
    <Route component={ResetPassword} path="/auth/reset-password" />
    <Route component={ForgotPassword} path="/auth/forgot-password" />
  </Switch>
);

const AuthLayout = props => {
  return <div className="bg-black">{authRoutes}</div>;
};

export default AuthLayout;
