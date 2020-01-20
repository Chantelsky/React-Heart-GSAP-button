import React from "react";
import HeartButton from "../src/components/heartbutton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HeartButton />
      <p>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </p>
    </div>
  );
}
