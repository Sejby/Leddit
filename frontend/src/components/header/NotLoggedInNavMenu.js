import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function NotLoggedInNavMenu() {
  return (
    <>
      <Link to="/prihlaseni">
        <button type="submit" className="btn btn-success btn-sm">
          <FontAwesomeIcon icon={faArrowRightToBracket} /> Přihlásit
        </button>
      </Link>
      <Link to="/registrace">
        <button type="submit" className="btn btn-danger btn-sm">
          Registrovat <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </Link>
    </>
  );
}

export default NotLoggedInNavMenu;
