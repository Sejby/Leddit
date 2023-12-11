
function signOff(){
    window.localStorage.removeItem("isLoggedIn")
    window.location.reload(true)
}

export {signOff}