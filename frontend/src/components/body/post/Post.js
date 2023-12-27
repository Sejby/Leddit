import React, { useEffect, useState } from "react";
import Reakce from "./Reakce";

import {
  faHeartCirclePlus,
  faHeartCircleMinus,
  faComment,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import Comment from "./Comment";
import "./Post.scss";

function Post(props) {
  const [idx, setIdx] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setIdx(props.idx);
    setData(props.data);
  }, [props.idx, props.data, data, idx]);

  return (
    <div id="post">
      <img src="" alt="" id="profile-obrazek" />
      <h3 id="nadpis-postu">{data?.username}</h3>
      <p id="text-postu">{data?.text}</p>
      <p id="datum">{data?.created_on}</p>
      <Comment idx={idx} />
      <div className="reakce">
        <Reakce
          icon={faHeartCirclePlus}
          style={{ color: "#18cc00" }}
          class="ikona"
        />
        <Reakce
          icon={faHeartCircleMinus}
          style={{ color: "#e60000" }}
          class="ikona"
        />
        <Reakce icon={faComment} class="ikona" />
        <Reakce icon={faRightLeft} class="ikona" />
      </div>
    </div>
  );
}

export default Post;
