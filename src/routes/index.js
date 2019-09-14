import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../views/Login";
import AuthLayout from "../layout/auth.layout";
import AppLayout from "../layout/app.layout";

const indexRoutes = (
  <Switch>
    <Route exact component={AppLayout} path="/" />
    <Route component={AuthLayout} path="/auth" />
    {/* <Route exact component={Landing} path="/landing" /> */}
    {/* <Route exact component={Notification} path="/notification" /> */}
    {/* <Route exact component={ReportsLanding} path="/reports-landing" /> */}
    {/* <Route component={NotFound} path="**" /> */}
  </Switch>
);

export default indexRoutes;
