import React from "react";
import { Card, Grid, Header } from "semantic-ui-react";

const PageLayout = (props) => {
  return (
    <Grid
      columns={1}
      padded
      className="swing-in-top-fwd"
      style={{
        animationDuration: "3s",
        animationIterationCount: "1",
      }}
    >
      <Grid.Row>
        <Card fluid>
          {props.searchPanel && (
            <Card.Content style={{ backgroundColor: "gray", margin: "10px" }}>
              {props.searchPanel}
            </Card.Content>
          )}
          {props.title && (
            <Card.Content>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Header as="h3">{props.title}</Header>
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
