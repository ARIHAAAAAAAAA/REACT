import React from "react";
import { useCounter } from "../custom Hooks/Hooks";

function DivComponent() {
  const { count,increment } = useCounter();

  return (
    <div>
      <div
        style={{ width: '100px', height: '100px', background:'red' }}
        onMouseOver={increment}
      >
        Hover over me
      </div>
      <p>Div hover {count}</p>
    </div>
  );
}

export default DivComponent;
