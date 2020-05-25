import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import InternalRoutes from "../../routes/InternalRoutes";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const App = () => {
  return (
    <Grid divided>
      <Grid.Row style={{ paddingBottom: 0 }}>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12} style={{ minHeight: "100vh" }}>
          <Grid.Row>
            <NavBar />
          </Grid.Row>
          <Grid.Row style={{ marginTop: 15 }}>
            <Segment padded>
              This is an stretched grid column. This segment will always match
              the tab height
              <InternalRoutes />
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
