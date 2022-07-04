import React from "react";
import { Grid } from "semantic-ui-react";
import Categories from "./Categories";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Navi></Navi>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList></ProductList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
