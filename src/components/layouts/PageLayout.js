import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";

const PageLayout = (props) => {
  return (
    <Grid columns={1} padded>
      <Grid.Row>
        <Card fluid>
          {props.searchPanel && (
            <Card.Content style={{ backgroundColor: "gray", margin: "10px" }}>
              <Header as="h4" style={{ color: "white" }}>
                {props.searchPanelTitle}
              </Header>
              {props.searchPanel}
            </Card.Content>
          )}
          {props.title && (
            <Card.Content header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h2">{props.title}</Header>
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    {props.primaryActions}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Content>
          )}
          <Card.Content>{props.body}</Card.Content>
          {props.secondaryActions && (
            <Card.Content textAlign="right" extra>
              {props.secondaryActions}
            </Card.Content>
          )}
        </Card>
      </Grid.Row>
    </Grid>
  );
};

PageLayout.propTypes = {};

export default PageLayout;
