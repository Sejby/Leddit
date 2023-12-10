import React, { useState, useEffect } from "react";
import LoggedInBanner from "./LoggedInBanner";
import "./Body.scss";

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
    </>
  );
}

export default Body;
