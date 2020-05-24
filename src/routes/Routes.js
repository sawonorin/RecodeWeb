import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../views/HomePage/Homepage";
import LoginForm from "../views/Auth/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
