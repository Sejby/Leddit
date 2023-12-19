import React, { useEffect, useState } from "react";
import Reply from "./Reply";
import './Post.scss'

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
    </div>
  );
}

export default Post;
