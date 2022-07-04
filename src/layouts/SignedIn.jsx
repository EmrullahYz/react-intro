import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <Menu.Item>
      <Image
        avatar
        src="https://static-exp2.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry"
      />
      <Dropdown pointing="left" text="Emrullah Y.">
        <Dropdown.Menu>
          <Dropdown.Item text="About Me" />
          <Dropdown.Item onClick={props.signOut} text="Sign out" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
