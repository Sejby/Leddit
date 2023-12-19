import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown} from "@fortawesome/free-solid-svg-icons";

function Comment(props) {
  const [idx, setIdx] = useState();

  useEffect(() => {
    setIdx(props.idx);
  }, [props.idx, idx]);

  return (
    <>
      <div>
        Vybraná odpověď
        <p>
          Zobrazit další odpovědi (počet: 0){" "}
          <FontAwesomeIcon icon={faArrowTurnDown} />
        </p>
      </div>
    </>
  );
}

export default Comment;
