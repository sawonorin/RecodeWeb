import React from "react";
import { Route, Switch } from "react-router-dom";
import { internalRoutesData } from "./InternalRoutesData";
import RouteWithPermissions from "./RouteWithPermission";

const InternalRoutes = () => {
  return (
    <Switch>
      {internalRoutesData.map(({ path, component, permission, exact }, i) => {
        if (permission) {
          return (
            <RouteWithPermissions
              path={path}
              component={component}
              permission={permission}
              key={`Route${i}`}
              exact={exact}
            />
          );
        } else {
          return (
            <Route
              exact={exact}
              path={path}
              component={component}
              key={`Route${i}`}
            />
          );
        }
      })}
    </Switch>
  );
};

export default InternalRoutes;
