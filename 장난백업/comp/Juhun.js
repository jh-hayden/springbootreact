import React from "react";
import JuhunRed from "./JuhunRed";

const Juhun = () => {
  return (
    <div>
      {[
       {fn:(i) => alert(i+"사랑")},
       {fn:(i) => alert(i+"행복")},
       {fn:(i) => alert(i+"이별")},
       {fn:(i) => alert(i+"배신")},
       {fn:(i) => alert(i+"믿음")},
    
      ].map((i, idx) => ( 
        <JuhunRed key ={idx} vv={i.fn} />
      ))}
    </div>
  );
};

export default Juhun;
