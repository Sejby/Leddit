import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { verifyData } from './Controller'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState();
  const navigate = useNavigate()
  let [pwd, setPwd] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/prihlaseni", { username, pwd })
      .then((result) => {
        verifyData(username, pwd, result, navigate)
      })
      .catch((err) => console.log(err));

  };

  return (
    <div id="prihlaseni">
      <h3 id="nadpis">Přihlášení</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="usernameinput" className="form-label">
            Zadejte uživatelské jméno nebo emailovou adresu:
          </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            id="usernameinput"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwdinput" className="form-label">
            Zadejte heslo:
          </label>
          <input
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            className="form-control"
            id="pwdinput"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Přihlásit
        </button>
      </form>
    </div>
  );
}

export default Login;
