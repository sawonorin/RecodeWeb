import React from "react";
import { Route } from "react-router-dom";
import { getUserPermissions,checkIfUserHasPermission } from "../helpers";
import UnauthorizedView from "../views/ErrorPages/UnauthorizedView";

let hasPermission = permission => {
  let userPermissions = getUserPermissions();
  let isPermitted =checkIfUserHasPermission(
    userPermissions,
    permission
  );
  return isPermitted ? true : false;
};

const RouteWithPermissions = ({
  component: Component,
  permission,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      hasPermission(permission) ? (
        <Component {...props} />
      ) : (
        <UnauthorizedView />
      )
    }
  />
);

export default RouteWithPermissions;
