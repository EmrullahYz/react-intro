import React from "react";
import { Button } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Button onClick={props.signIn} primary>
        giris yap
      </Button>
      <Button primary> uye Ol </Button>
    </div>
  );
}
