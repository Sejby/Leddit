const bcrypt = require("bcryptjs-react");

async function verifyData(username, pwd, result, navigate) {
  if (
    result.data.username === username &&
    (await verifyPassword(pwd, result))
  ) {
    alert("Přihlášení úspěšné!")
    navigate("/")
  } else {
    alert("Špatně zadané uživatelské jméno nebo heslo!")
    navigate("/prihlaseni")
  }
}

async function verifyPassword(pwd, result) {
  try {
    const hodnota = await bcrypt.compare(pwd, result.data.pwd);
    console.log(hodnota);
    return hodnota;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export { verifyData };
