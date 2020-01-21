import React from "react";
import { ReactComponent } from "../images/cupid.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import gsap from "gsap";

const HeartButton = ({ count, incrementCount }) => {
  const handleClick = () => {
    gsap.to("#Layer_1", {
      duration: 2.5,
      ease: "slow(0.7, 0.7, false)",
      opacity: 1,
      y: -100
    });
    //update state in app
    incrementCount();
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleClick}>
        <div className="cupid-icon">
          <ReactComponent alt={"cupid"} />
          <Heart />
          <div className="clicky">{count}</div>
        </div>
      </button>
    </div>
  );
};

export default HeartButton;
