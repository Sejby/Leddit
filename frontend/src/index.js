import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import './index.scss';
import Header from './components/header/Header'
import Body from "./components/body/Body";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Register from "./components/register/Register";
import Login from "./components/login/Login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/o-aplikaci" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/registrace" element={<Register />} />
        <Route path="/prihlaseni" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
);
