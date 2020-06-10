import React, { useState } from "react";

const DemoState = () => {
  const [islit, setlit] = useState(true);
  let [temp, settemp] = useState(22);

  return (
    <div className="room">
      <h1>{islit ? "ON" : "OFF"}</h1>
      <button onClick={() => setlit(true)}>ON</button>
      <button onClick={() => setlit(false)}>OFF</button>

      <h1>{temp}</h1>
      <button onClick={() => settemp(++temp)}>+</button>
      <button onClick={() => settemp(--temp)}>-</button>
    </div>
  );
};

export default DemoState;
