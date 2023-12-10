import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { verifyData, encryptPassword} from "./Controller";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  let [pwd, setPwd] = useState();
  const [pwd_repeat, setPwdRepeat] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verifyData(username, email, pwd, pwd_repeat)) {
      pwd = encryptPassword(pwd);
      axios
        .post("http://localhost:5000/registrace", { username, email, pwd })
        .then((result) => {
          console.log(result);
          if(result.data.message === "userExists"){
            alert("Uživatel se stejným jménem nebo emailem již existuje!")
          }else{
            navigate("/prihlaseni");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="registrace">
      <h3 id="nadpis">Registrace</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="usernameinput" className="form-label">
            Zadejte uživatelské jméno:
          </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            id="usernameinput"
          />
          <div className="form-text help">
            Uživatelské jméno musí být dlouhé alespoň 4 znaky
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="emailinput" className="form-label">
            Zadejte emailovou adresu:
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="emailinput"
            aria-describedby="emailHelp"
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
          <div className="form-text help">
            Heslo musí obsahovat alespoň 6 znaků, 1 číslici a 1 velké písmeno
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="pwdrepeatinput" className="form-label">
            Zadejte heslo znovu:
          </label>
          <input
            type="password"
            onChange={(e) => setPwdRepeat(e.target.value)}
            className="form-control"
            id="pwdrepeatinput"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Registrovat
        </button>
      </form>
    </div>
  );
}

export default Register;
