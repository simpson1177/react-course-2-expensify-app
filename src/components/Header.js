import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <p>
      <NavLink exact={true} to="/" activeClassName="is-active">
        HOME
      </NavLink>
    </p>
    <p>
      <NavLink to="/create" activeClassName="is-active">
        CREATE
      </NavLink>
    </p>

    <p>
      <NavLink to="/help" activeClassName="is-active">
        HELP
      </NavLink>
    </p>
  </header>
);

export default Header;
