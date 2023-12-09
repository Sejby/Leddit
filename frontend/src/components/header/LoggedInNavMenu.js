import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function LoggedInNavMenu() {
  return (
    <>
      <Link to="/nastaveni">
        <button type="submit" className="btn btn-light btn-sm">
          <FontAwesomeIcon icon={faArrowRightToBracket} /> Přihlásit
        </button>
      </Link>
      <Link to="/odhlasit">
        <button type="submit" className="btn btn-danger btn-sm">
          Odhlásit <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </Link>
    </>
  );
}

export default LoggedInNavMenu;
