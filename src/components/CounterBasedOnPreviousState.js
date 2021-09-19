import React, { useState } from "react";

const CounterBasedOnPreviousState = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Plus</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Minus</button>
    </div>
  );
};

export default CounterBasedOnPreviousState;
