import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [pwd_repeat, setPwdRepeat] = useState();

  function verifyPassword(pwd, pwd_repeat) {
    if (pwd === pwd_repeat) {
      console.log("Hesla se shodují");
      return true;
    } else {
      alert("Hesla se neshodují! Zkuste to znovu:");
      return false;
    }
  }

  function validateUsername(username) {
    if (username.trim().length >= 4) {
      console.log("uživatelské jméno má" + username.trim().length + "znaků");
      return true;
    } else {
      alert("Neplatné uživatelské jméno!")
      return false;
    }
  }

  function validateEmail(email) {
    const znaky = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (email === "") {
      alert("Zadejte email:");
    } else if (znaky.test(email)) {
      return true;
    } else if (!znaky.test(email)) {
      alert("Neplatný email! Zkuste to znovu.");
      return false;
    }
  }

  function validatePwd(pwd) {
    const znaky = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
    if (pwd === "") {
      alert("Zadejte heslo:");
      return false;
    } else if (znaky.test(pwd)) {
      return true;
    } else if (!znaky.test(pwd)) {
      alert("Neplatné heslo! Zkuste to znovu.");
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateUsername(username) &&
      validateEmail(email) &&
      validatePwd(pwd) &&
      verifyPassword(pwd, pwd_repeat)
    ) {
      axios
        .post("http://localhost:5000/registrace", { username, email, pwd })
        .then((result) => console.log(result))
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
