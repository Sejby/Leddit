import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCirclePlus,
  faHeartCircleMinus,
  faComment,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import Reply from "./Comment";
import "./Post.scss";

function Post(props) {
  const [idx, setIdx] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setIdx(props.idx);
    setData(props.data);
  }, [props.i, props.data, data, idx]);

  return (
    <div id="post">
      <h3 id="nadpis-postu">{data?.username}</h3>
      <p id="text-postu">{data?.text}</p>
      <p id="datum">{data?.created_on}</p>
      <Reply idx={idx} />
      <div className="reakce">
        0
        <FontAwesomeIcon
          icon={faHeartCirclePlus}
          style={{ color: "#18cc00" }}
        />
        0
        <FontAwesomeIcon
          icon={faHeartCircleMinus}
          style={{ color: "#e60000" }}
        />
        0
        <FontAwesomeIcon icon={faComment} /> 
        0
        <FontAwesomeIcon icon={faRightLeft} /> 
      </div>
    </div>
  );
}

export default Post;
