import React, { useState } from "react";

const Injung = () => {
  const [cnt, setCnt] = useState(10);
  const increase = () => setCnt(cnt + 1);
  const decrease = () => setCnt(cnt - 1);

  return (
    <div>
      <div>
        <button onClick={increase}>+</button>
      </div>

      <div>
        <button onClick={decrease}>+</button>
      </div>
      <div>{cnt}</div>
    </div>
  );
};

export default Injung;
