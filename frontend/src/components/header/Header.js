import React from "react";
import "./Header.scss";
import { Routes, Route, Link } from "react-router-dom";
import Body from "../body/Body";
import Contact from "../contact/Contact";
import About from "../about/About";
import Register from "../register/Register";
import Login from "../login/Login";
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

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/o-aplikaci" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/registrace" element={<Register />} />
        <Route path="/prihlaseni" element={<Login />} />
      </Routes>
    </>
  );
}

export default Header;
