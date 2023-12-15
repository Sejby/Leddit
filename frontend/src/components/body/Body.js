import React, { useState, useEffect } from "react";
import LoggedInBanner from "./LoggedInBanner";
import "./Body.scss";
import Post from "./post/Post";
import { nactiPrispevky } from "./Posts_Req";


function Body() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [polePrispevku, setPolePrispevku] = useState()

 

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem("isLoggedIn"))
    setPolePrispevku(nactiPrispevky())
    console.log(polePrispevku) // vrací promise, idk how to fix
  }, [])


  return (
    <>
      {isLoggedIn ? (
        <div>Příhlašený: {isLoggedIn}
          <LoggedInBanner />

        </div>
      ) : (
        <div>Nepřihlášený: {isLoggedIn} </div>
      )}

      <div id="posty">Posty:
        <Post />



      </div>
    </>
  );
}

export default Body;
