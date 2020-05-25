import Dashboard from "../views/Dashboard/Dashboard";
import AllCompanies from "../views/Company/AllCompanies";

//Route Object
export const routeData = [
  { path: ["/", "/dashboard"], component: Dashboard, exact: true },
  {
    path: "/company/view",
    component: AllCompanies,
    exact: true,
  },
  { path: "/auth-not-found", component: "UnauthorisedView", exact: true },
  { component: Dashboard }, //page to be navigated to when none of the routes is matched
];
