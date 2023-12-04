import React from 'react'
import './LogRegButton.scss'


function LogRegButton(props) {
  var hlaska
  if (props.operace === "login"){
    hlaska = "Přihlásit"
  }else{
    hlaska = "Registrovat"
  }

  return (
    <button>
      {hlaska}
    </button>
  );
}

export default LogRegButton