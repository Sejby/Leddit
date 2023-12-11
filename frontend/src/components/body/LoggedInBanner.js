import axios from "axios";
import React, { useEffect, useState } from "react";

function LoggedInBanner() {
  const [text, setText] = useState();
  const [username, setUsername] = useState()

  useEffect(() => {
    setUsername(window.localStorage.getItem("username"))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setText();

    if (text !== "") {
      axios.post("/pridatprispevek", { username, text }).then((res) => res.json());
    }
  };

  return (
    <div id="banner">
      <textarea
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Co chcete inzerovat?"
        id="banner-text"
        maxLength={150}
        cols={50}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        name="btn-banner"
        className="btn btn-primary"
      >
        Odeslat
      </button>
    </div>
  );
}

export default LoggedInBanner;
