import React, { useState } from "react";
import HeartButton from "../src/components/heartbutton";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HeartButton
        count={count}
        incrementCount={() => setCount(count => count + 1)}
      />
    </div>
  );
}
