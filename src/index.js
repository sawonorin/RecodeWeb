/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { persistor, store } from './_store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import indexRoutes from "./routes";
import { history } from './_helpers'

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";



ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
          {indexRoutes}
      </Router>
  </PersistGate>
</Provider>,
  document.getElementById("root")
)

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/components" render={props => <Index {...props} />} />
//       <Route
//         path="/landing-page"
//         render={props => <LandingPage {...props} />}
//       />
//       <Route
//         path="/register-page"
//         render={props => <RegisterPage {...props} />}
//       />
//       <Route
//         path="/profile-page"
//         render={props => <ProfilePage {...props} />}
//       />
//       <Redirect from="/" to="/components" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
