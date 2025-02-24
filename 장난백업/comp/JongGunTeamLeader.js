import React, { useState } from "react";

const JongGunTeamLeader = () => {
  const [data, setData] = useState();
  return (
    <div>
      <div>
        <div>
          이상해씨
          <input
            style={{ border: "solid" }}
            type="text"
            onChange={() => setData(data + 5)}
            value={data}
          />
        </div>
      </div>
    </div>
  );
};

export default JongGunTeamLeader;
