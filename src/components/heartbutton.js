import React, { useState, useEffect } from "react";
import { ReactComponent } from "../images/cupid.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import gsap from "gsap";

const HeartButton = ({ count, incrementCount }) => {
  // let HeartDiv = React.useRef(null);

  const [tl] = useState(gsap.timeline({ paused: true }));

  const [clickAnimation, setClickAnimation] = useState();

  useEffect(() => {
    setClickAnimation(
      tl.to("#Layer_1", {
        duration: 0.75,
        ease: "slow(0.7, 0.7, false)",
        opacity: 1,
        display: "block",
        y: -200
      })
    );
  }, [tl]);

  useEffect(() => {
    tl.time(0);
  }, [count, tl]);

  const handleClick = () => {
    incrementCount();
    clickAnimation.play();
  };

  return (
    <div className="container">
      <button className="btn" onClick={() => handleClick()}>
        <div className="cupid-icon">
          <ReactComponent alt={"cupid"} />
          <Heart className="heart-icon" />
          <div className="clicky">{count}</div>
        </div>
      </button>
    </div>
  );
};

export default HeartButton;
