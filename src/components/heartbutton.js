import React from "react";
import { ReactComponent } from "../images/cupid.svg";

const heartButton = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>
        <div className="cupid-icon">
          <ReactComponent alt={"cupid"} />
          <div>{count}</div>
        </div>
      </button>
    </div>
  );
  s;
};

export default heartButton;
