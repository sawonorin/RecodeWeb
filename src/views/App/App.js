import React from "react";
import { Grid } from "semantic-ui-react";
import InternalRoutes from "../../routes/InternalRoutes";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const App = () => {
  return (
    <Grid divided style={{ paddingRight: 15 }}>
      <Grid.Row style={{ paddingBottom: 0 }}>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12} style={{ minHeight: "100vh" }}>
          <Grid.Row>
            <NavBar />
          </Grid.Row>
          <Grid.Row style={{ marginTop: 15 }}>
            <InternalRoutes />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
