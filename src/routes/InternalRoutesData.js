import { lazy } from "react";
const Dashboard = lazy(() => import( "../views/Dashboard/Dashboard"));
const AllCompanies = lazy(() => import( "../views/Company/AllCompanies"));

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
  // {
  //   path: "/departments/all",
  //   component: AllCompanies,
  //   exact: true,
  // },
  // {
  //   path: "/job-roles/all",
  //   component: AllCompanies,
  //   exact: true,
  // },
  { path: "/auth-not-found", component: "UnauthorisedView", exact: true },
  { component: Dashboard }, //page to be navigated to when none of the routes is matched
];
