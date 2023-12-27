import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Reakce.scss'

import React from "react";

function Reakce(props) {
  return (
    <>
      <FontAwesomeIcon icon={props.icon} style={props.style} className={props.class} />
        <p>0</p>
    </>
  );
}

export default Reakce;
