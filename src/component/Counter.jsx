import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count:{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </>
  );
};
