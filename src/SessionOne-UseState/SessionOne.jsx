import { useState } from "react";
import "./SessionOneCss.css"

function SessionOne() {
  const [number, setNumber] = useState(5);
  function handleChange(x) {
    if (x == "m" && number > 0) setNumber((prev) => prev - 1);
    if (x == "p") setNumber((prev) => prev + 1);
  }

  return (
    <div className="sessionOneDiv">
      <button onClick={() => handleChange("m")}> - </button>
      <h1> {number} </h1>
      <button onClick={() => handleChange("p")}> + </button>
    </div>
  );
}

export default SessionOne;
