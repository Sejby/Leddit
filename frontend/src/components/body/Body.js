import React, { useState, useEffect } from "react";
import LoggedInBanner from "./LoggedInBanner";
import "./Body.scss";
import Post from "./post/Post";
import axios from "axios";

function Body() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [polePrispevku, setPolePrispevku] = useState([]);

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem("isLoggedIn"));

    axios
      .post("http://localhost:5000/nactiprispevky")
      .then((res) => {
        setPolePrispevku(res.data);
      })
      .catch((err) => console.log(err));
  }, [isLoggedIn, polePrispevku]);

  return (
    <>
      {isLoggedIn ? (
        <div>
          Příhlašený: {isLoggedIn}
          <LoggedInBanner />
        </div>
      ) : (
        <div>Nepřihlášený: {isLoggedIn} </div>
      )}

      <div id="posty">Posty:</div>
      <Post data={polePrispevku[0]} i={0}/>
      {polePrispevku?.forEach((element, i) => {
        <Post data={polePrispevku[i]} i={i} />
      })}
    </>
  );
}

export default Body;
