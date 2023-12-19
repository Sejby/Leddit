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
    <div id="body">
      {isLoggedIn ? (
        <div>
          Příhlašený: {isLoggedIn}
          <LoggedInBanner />
        </div>
      ) : (
        <div>Nepřihlášený: {isLoggedIn} </div>
      )}

      <div id="posty">
        {polePrispevku.map((element, i) => (
          <Post key={i} data={polePrispevku[i]} idx={i} />
        ))}
      </div>
    </div>
  );
}

export default Body;
