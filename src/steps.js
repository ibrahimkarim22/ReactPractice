import { useEffect, useState } from "react";

const Steps = () => {
  const [steps, setSteps] = useState(() => {
    const savedSteps = localStorage.getItem('steps');
    return savedSteps ? JSON.parse(savedSteps) : 0;
  });
  const [increment, setIncrement] = useState(() => {
    const savedIncrement = localStorage.getItem('increment');
    return savedIncrement ? JSON.parse(savedIncrement) : 0;
  });

  function stepsIncrease() {
    setSteps(increment + steps);
    setIncrement(0)
  }
  function stepsDecrease() {
    if (steps - increment >= 0) {
        setSteps(increment - steps)
        setIncrement(0)
    } else {
        alert('number cannot go below 0')
    }
  }

  function reset() {
    setSteps(0)
    setIncrement(0)
    localStorage.removeItem("steps");
    localStorage.removeItem("increment")
  }

  useEffect(() => {
    localStorage.setItem('steps', JSON.stringify(steps));
    localStorage.setItem('increment', JSON.stringify(increment));
  },[steps, increment])


  return (
    <>
      <div className="main">
        <label for="steps-field" className="steps-label">
          Insert Steps Count
        </label>
        <input
          type="number"
          className="steps-field"
          value={increment}
          onChange={(e) => setIncrement(Number(e.target.value))}
        />
        <button className="steps-inc" onClick={stepsIncrease}>
          +
        </button>
        <button className="steps-dec" onClick={stepsDecrease}>-</button>
        <button className="reset-steps" onClick={reset}>RESET</button>
        <div className="steps-text">{steps}</div>
      </div>
    </>
  );
};

export default Steps;
