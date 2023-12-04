import React from 'react'
import './Header.scss'
import LogRegButton from './LogRegButton'

function Header() {
  return (
    <header>
      <h3>Rinked<span>In</span></h3>

      <div id="navmenu">
        <ul>
          <li><a href="haha">Úvod</a></li>
          <li><a href="lol">O Aplikaci</a></li>
          <li><a href="xd">Kontakt</a></li>
        </ul>
        <div id="logregbar">
          <input type="text" placeholder="Uživatelské jméno" name="uzivatelskejmeno" id="username_input"/>
          <input type="password" placeholder="Heslo" name="heslo" id="pwd_input"/>
          <LogRegButton operace = "login" />
          <LogRegButton operace = "register" />
        </div>
      </div>
    </header>
  )
}

export default Header