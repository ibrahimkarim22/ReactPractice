import {useState, useMemo} from 'react';

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const expensiveValue = useMemo(() => {
        console.log("expensive calculation running...");
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += 1;
        }
        return sum + count;
    }, [count])

    return (
        <div>
          <h2>Expensive Value: {expensiveValue}</h2>
          <button onClick={() => setCount(count + 1)}>Increase Count</button>
          <button onClick={() => setToggle(!toggle)}>Toggle State</button>
          <p>Toggle state: {toggle ? "ON" : "OFF"}</p>
        </div>
      );
}
export default ExpensiveCalculation;