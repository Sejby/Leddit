import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  let [pwd, setPwd] = useState();
  const bcrypt = require("bcryptjs-react");

  function verifyData(username, pwd, result){
    if(result.data.username == username && verifyPassword(pwd, result) == true){
      console.log("Jsi přihlášen");
    }else if (result.data.username != username || verifyPassword(pwd, result) == false) {
      console.log("Ty jsi ale budulínek!");
    }
  }

  async function verifyPassword(pwd, result){
    var hodnota
    hodnota = await bcrypt.compare(pwd,result.data.pwd)
    console.log(hodnota);
    return hodnota
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      // Validate
        1==1
    ) {
      axios
        .post("http://localhost:5000/prihlaseni", {username, pwd})
        .then((result) => {
          console.log(result)
          verifyData(username,pwd,result)
        })
        .catch((err) => console.log(err));
    }
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
