import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import './Like.scss'

function Like() {
  return (
    <div className="like-wrapper">
      <FontAwesomeIcon icon={faCircleUp} className="like"/>
      <p id="pocetLiku">10</p>
      <FontAwesomeIcon icon={faCircleDown} className="dislike"/>
    </div>
  );
}

export default Like;
