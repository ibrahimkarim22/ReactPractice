import {useState, useEffect} from 'react';

const CounterThree = () => {
    let initial = 0;
    const [count, setCount] = useState(initial)
    return (
        <>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <button onClick={() => setCount(initial)}>Reset</button>
        
        </>
    )
}

export default CounterThree;