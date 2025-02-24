import React from "react";

const HycukBin = ({ fu, vv }) => {
  return (
    <div>
      HycukBin
      <button
        onClick={() => {
          console.log(fu(34) + vv(23, { a: [1, 2, 3, 4] }));
        }}
      >
        눌러라
      </button>
    </div>
  );
};

export default HycukBin;
