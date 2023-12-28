import React, { useEffect, useState } from "react";
import Like from "./Like";
import "./Post.scss";

function Post(props) {
  const [idx, setIdx] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setIdx(props.idx);
    setData(props.data);
  }, [props.idx, props.data, data, idx]);

  return (
    <div className="post">
      <div className="content-wrapper">
        <img src="" alt="" className="profile-obrazek" />
        <h3 className="nadpis-postu">{data?.username}</h3>
        <p className="text-postu">{data?.text}</p>
        <p className="datum">{data?.created_on}</p>
        <div className="reakce">
          <Like />
        </div>
      </div>
    </div>
  );
}

export default Post;
