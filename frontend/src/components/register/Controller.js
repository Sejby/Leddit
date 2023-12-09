const bcrypt = require("bcryptjs-react");

function verifyPassword(pwd, pwd_repeat) {
  if (pwd === pwd_repeat) {
    console.log("Hesla se shodují");
    return true;
  } else {
    alert("Hesla se neshodují! Zkuste to znovu:");
    return false;
  }
}

function verifyDuplicateUserName(username, email){
    
}

function validateUsername(username) {
  if (username.trim().length >= 4) {
    console.log("uživatelské jméno má" + username.trim().length + "znaků");
    return true;
  } else {
    alert("Neplatné uživatelské jméno!");
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

function verifyData(username, email, pwd, pwd_repeat) {
  if (
    validateUsername(username) &&
    validateEmail(email) &&
    validatePwd(pwd) &&
    verifyPassword(pwd, pwd_repeat)
  ) {
    return true
  }
}

function encryptPassword(pwd) {
  return bcrypt.hashSync(pwd, 10);
}

export {
  verifyData,
  encryptPassword
}
