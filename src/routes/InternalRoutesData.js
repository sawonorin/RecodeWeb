import { lazy } from "react";
const Dashboard = lazy(() => import("../views/Dashboard/Dashboard"));
const AllCompanies = lazy(() => import("../views/Company/AllCompanies"));
const AllDepartments = lazy(() => import("../views/Department/AllDepartments"));
const AllJobRoles = lazy(() => import("../views/JobRole/AllJobRoles"));
const UnauthorizedView = lazy(() =>
  import("../views/ErrorPages/UnauthorizedView")
);

//Route Object
export const internalRoutesData = [
  { path: ["/", "/dashboard"], component: Dashboard, exact: true },
  // {
  //   path: "/users/all",
  //   component: AllCompanies,
  //   exact: true,
  // },
  {
    path: "/companies/all",
    component: AllCompanies,
    exact: true,
  },
  {
    path: "/departments/all",
    component: AllDepartments,
    exact: true,
  },
  {
    path: "/job-roles/all",
    component: AllJobRoles,
    exact: true,
  },
  { path: "/unauthorized", component: UnauthorizedView, exact: true },
  { component: Dashboard }, //page to be navigated to when none of the routes is matched
];
