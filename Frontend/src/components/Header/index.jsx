import React from "react";
import * as Styles from "./styles";
import user from "../../image/user.jpg";
function Header() {
  return (
    <Styles.Container>
      <Styles.Links>
        <Styles.User src={user} />
        <button type="button">Sign Out</button>
      </Styles.Links>
      <h2>ref:7623423</h2>
    </Styles.Container>
  );
}

export default Header;
