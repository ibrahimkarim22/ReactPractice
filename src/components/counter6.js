import { useEffect, useState } from 'react';

const CounterSix = () => {
    const [count, setCount] = useState(() => {
        const store = localStorage.getItem('count');
        return store ? JSON.parse(store) : 0;
    });

    const [showError, setShowError] = useState(false);

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    function increase() {
        setCount(count + 1);
        setShowError(false); 
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
            setShowError(false); 
        } else {
            setShowError(true);

            setTimeout(() => {
                setShowError(false); 
            }, 2000); 
        }
    }

    return (
        <>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            {showError && <p>Can't go below 0</p>} 
        </>
    );
}

export default CounterSix;