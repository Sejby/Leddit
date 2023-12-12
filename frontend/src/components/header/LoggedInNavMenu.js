import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { signOff } from "./Controller";

function LoggedInNavMenu() {
  return (
    <>
      <Link to="/nastaveni">
        <button type="submit" className="btn btn-light btn-sm"> // Idealně dát do jednoho souboru s notloggedinheaderem
          <FontAwesomeIcon icon={faUser}/> Profil
        </button>
      </Link>
      <Link to="/odhlasit">
        <button type="submit" onClick={signOff} className="btn btn-danger btn-sm">
          Odhlásit <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </Link>
    </>
  );
}

export default LoggedInNavMenu;
