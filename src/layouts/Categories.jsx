import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Container>
          <Menu.Item name="Beverages"></Menu.Item>

          <Menu.Item name="Condiments"></Menu.Item>

          <Menu.Item name="Daily suppliers"></Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
