import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //useEffect runs after every render
  useEffect(() => {
    console.log("updating");
  }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <div>{count}</div>
    </div>
  );
}

export default UseEffect;
