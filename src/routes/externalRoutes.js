import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LazyLoader from "../components/Loaders/LazyLoader";
import Notify from "../components/Notifications/Notify";
/**Implementation for lazy loading */
const Homepage = lazy(() => import("../views/HomePage/Homepage"));
const LoginForm = lazy(() => import("../views/Auth/Login"));
const AuthenticatedRoute = lazy(() => import("./AuthenticatedRoute"));
const AppLayout = lazy(() => import("../views/AppLayout"));

const externalRoutes = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginForm} />
          <AuthenticatedRoute component={AppLayout} path="/" />
        </Switch>
      </BrowserRouter>
      <Notify />
    </Suspense>
  );
};

export default externalRoutes;
