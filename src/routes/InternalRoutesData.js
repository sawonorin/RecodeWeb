import Dashboard from "../views/Dashboard/Dashboard";
import AllCompanies from "../views/Company/AllCompanies";

//Route Object
export const internalRoutesData = [
  { path: ["/", "/dashboard"], component: Dashboard, exact: true },
  {
    path: "/companies/all",
    component: AllCompanies,
    exact: true,
  },
  { path: "/auth-not-found", component: "UnauthorisedView", exact: true },
  { component: Dashboard }, //page to be navigated to when none of the routes is matched
];
