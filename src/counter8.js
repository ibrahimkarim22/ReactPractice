import { useEffect, useState } from "react";

const Counter8 = () => {
  const [count, setCount] = useState(() => {
    const store = localStorage.getItem("count");
    return store ? JSON.parse(store) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  function increase() {
    const newCount = count + 1;
    setCount(newCount);
  }

  function decrease() {
    if (count > 0) {
      alert("0 is the lowest");
    }
  }

  function reset() {
    setCount(0);
    localStorage.removeItem("count");
  }

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Counter8;
