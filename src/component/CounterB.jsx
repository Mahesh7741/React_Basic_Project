import { useState } from "react";
import "./CounterB.css";

function CounterB() {
  const [number, setNumber] = useState(0);
  function handelClick(e) {
    e.stopPropagation();
    // setTimeout(()=>{setNumber(number + 1);},2000)
    setNumber(number+1);
  }

  return (
    <>
      <div className="box">
        <h1>{number}</h1>
        <button className="button" onClick={handelClick}>
          Add Number
        </button>
      </div>
    </>
  );
}

export default CounterB;
