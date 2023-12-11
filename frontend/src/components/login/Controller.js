const bcrypt = require("bcryptjs-react");

async function verifyData(username, pwd, result, navigate) {
  if (
    result.data.username === username &&
    (await verifyPassword(pwd, result))
  ) {
    window.localStorage.setItem("isLoggedIn", true)
    window.localStorage.setItem("username", username)
    navigate("/")
    alert("Přihlášení úspěšné!")
    window.location.reload(true);
    
  } else {
    alert("Špatně zadané uživatelské jméno nebo heslo!")
    navigate("/prihlaseni")
  }
}

async function verifyPassword(pwd, result) {
  try {
    const hodnota = await bcrypt.compare(pwd, result.data.pwd);
    return hodnota;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export { verifyData };
