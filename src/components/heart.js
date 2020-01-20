import React from "react";
import { ReactComponent } from "../images/heart.svg";
import gsap from "gsap";


const Heart = ({ isClicked }) => {
  const HeartDiv = React.useRef(null);
    gsap.to(HeartDiv, {
    duration: 2.5,
    ease: "slow(0.7, 0.7, false)",
    opacity: 1,
    y: "100%"
    });
  }

  return (
    <div className="heart-icon">
      <ReactComponent alt={"heart"} ref={HeartDiv} />
    </div>
  );
};

export default Heart;
