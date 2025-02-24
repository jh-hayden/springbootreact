import React from "react";

const JuhunRed = ({ vv }) => {
  console.log(vv);
  const {fn} = vv;
  return (
    <div>
      <button onClick={vv}
        >눌러라</button>
    </div>
  );
};

export default JuhunRed;
