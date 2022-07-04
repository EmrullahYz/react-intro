import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut(params) {
    setIsAuthenticated(false);
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="editorials">Editorials</Menu.Item>

          <Menu.Item name="reviews">Reviews</Menu.Item>

          <Menu.Item name="upcomingEvents">Upcoming Events</Menu.Item>
          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} someDate="1" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
