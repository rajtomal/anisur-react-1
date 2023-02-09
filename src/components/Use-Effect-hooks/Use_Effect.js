import React, { useState } from "react";
import { useEffect } from "react";

const LearnUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This is Use Effect");
  }, [count]);

  return (
    <div>
      {console.log("rendaring")}
      <p>
        count:
        {count}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default LearnUseEffect;
