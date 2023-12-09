import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import LoggedInNavMenu from "./LoggedInNavMenu";
import NotLoggedInNavMenu from "./NotLoggedInNavMenu";

function Header() {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  return (
    <>
      <header>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h3>
            Rinked<span>In</span>
          </h3>
        </Link>

        <div id="navmenu">
          <ul>
            <li>
              <Link to="/o-aplikaci">O Aplikaci</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>

          {isLoggedIn ?
           <LoggedInNavMenu />: 
          <NotLoggedInNavMenu />}
      
        </div>
      </header>
    </>
  );
}

export default Header;
