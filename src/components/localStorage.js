import {useState, useEffect} from 'react';


const Local = () => {

    const [count, setCount] = useState(() => {
        return localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
    })

    useEffect(() => {
        localStorage.setItem('counter', count);
    }, [count])

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
    }

    const reset = () => {
        setCount(0);
        localStorage.removeItem('counter');
    }

    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </>
    )

}

export default Local;