import React from 'react'
import './Header.scss'
import {Routes, Route, Link } from "react-router-dom";
import Body from '../body/Body'
import Contact from '../contact/Contact'
import About from '../about/About'
import Register from '../register/Register'
import Login from '../login/Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (<>
    <header>
      <Link to="/" style={{textDecoration: 'none', color: 'white'}}><h3>Rinked<span>In</span></h3></Link>

      <div id="navmenu">
        <ul>
          <li><Link to="/o-aplikaci">O Aplikaci</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
          <Link to="/prihlaseni"><button type='submit' className='btn btn-success btn-sm'><FontAwesomeIcon icon={faArrowRightToBracket}/> Přihlásit</button></Link>
          <Link to="/registrace"><button type='submit' className='btn btn-danger btn-sm'>Registrovat <FontAwesomeIcon icon={faArrowRightFromBracket}/></button></Link>
        </div>
    </header>

    <Routes>
      <Route path="/" element={<Body />} />
      <Route path='/o-aplikaci' element={<About />} />
      <Route path="/kontakt" element={<Contact />} />      
      <Route path='/registrace' element={<Register />} />
      <Route path="/prihlaseni" element={<Login />} />
    </Routes>
    </>
  )
}

export default Header