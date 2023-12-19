import React, { useEffect, useState } from "react";

function Reply(props) {
  const[idx, setIdx] = useState()

  useEffect(()=> {
    setIdx(props.idx)
  }, [props.idx, idx])

  return (
    <>
      <div>
        Vybraná odpověď
        <p>Zobrazit další odpovědi {idx}</p>
      </div>
    </>
  );
}

export default Reply;
