import React from 'react'
import './Header.scss'
import {Routes, Route, Link } from "react-router-dom";
import Body from '../Body'
import Contact from '../Contact'
import About from '../About'


function Header() {
  return (<>
    <header>
      <Link to="/" style={{textDecoration: 'none', color: 'white'}}><h3>Rinked<span>In</span></h3></Link>

      <div id="navmenu">
        <ul>
          <li><Link to="/o-aplikaci">O Aplikaci</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>

          <input type="text" placeholder="Uživatelské jméno" name="uzivatelskejmeno" id="username_input"/>
          <input type="password" placeholder="Heslo" name="heslo" id="pwd_input"/>
          <button type='submit' className='btn btn-primary btn-sm'>Přihlásit</button>
          <button type='submit' className='btn btn-danger btn-sm'>Registrovat</button>
        </div>
    </header>

    <Routes>
      <Route path="/" element={<Body />} />
      <Route path='/o-aplikaci' element={<About />} />
      <Route path="/kontakt" element={<Contact />} />      
    </Routes>
    </>
  )
}

export default Header