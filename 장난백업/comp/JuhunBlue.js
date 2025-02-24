import React from "react";

const JuhunRed = ({ vv, idx }) => {
  console.log(idx);
  return (
    <div>
      <button onClick={() => 
        console.log("사랑")}>눌러라{vv}</button>
        


    </div>
  );
};

export default JuhunRed;
