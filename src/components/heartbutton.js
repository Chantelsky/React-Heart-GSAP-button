import React from "react";
import { ReactComponent } from "../images/cupid.svg";
import Heart from "./heart";

const HeartButton = ({ count, incrementCount }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

    //update state in app
    incrementCount();
  };

  return (
    <div className="container">
      <button className="btn" onClick={incrementCount}>
        <div className="cupid-icon">
          <ReactComponent alt={"cupid"} />
          <Heart isClicked={isClicked} />
          <div className="clicky">{count}</div>
        </div>
      </button>
    </div>
  );
};

export default HeartButton;
