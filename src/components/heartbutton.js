import React from "react";
import { ReactComponent } from "../images/cupid.svg";

const heartButton = () => {
  return (
    <div>
      <button>
        <div className="cupid-icon">
          <ReactComponent alt={"cupid"} />
        </div>
      </button>
    </div>
  );
};

export default heartButton;
