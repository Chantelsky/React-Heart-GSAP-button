import React from "react";
import { ReactComponent } from "../images/cupid.svg";

const heartButton = ({ count, incrementCount }) => {
  return (
    <div className="container">
      <button class="btn" onClick={incrementCount}>
        <div className="cupid-icon">
          <ReactComponent alt={"cupid"} />
          <div className="clicky">{count}</div>
        </div>
      </button>
    </div>
  );
};

export default heartButton;
