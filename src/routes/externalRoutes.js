import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../views/HomePage/Homepage";
import LoginForm from "../views/Auth/Login";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AppLayout from "../views/AppLayout";

const externalRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginForm} />
        <AuthenticatedRoute component={AppLayout} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default externalRoutes;
