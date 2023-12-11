import React, { useState, useEffect } from "react";
import LoggedInBanner from "./LoggedInBanner";
import "./Body.scss";
import Post from "./post/Post";

function Body() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem("isLoggedIn"));
  }, []) 
  
  return (
    <>
      {isLoggedIn ? (
        <div>Příhlašený: {isLoggedIn}
          <LoggedInBanner />
        
         </div>
      ):(
        <div>Nepřihlášený: {isLoggedIn} </div>
      )}

      <div id="posty">Posty:
        <Post />



      </div>
    </>
  );
}

export default Body;
