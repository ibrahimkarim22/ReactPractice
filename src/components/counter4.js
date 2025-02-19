import {useState} from 'react';

const CounterFour = () => {

    const [count, setCount] = useState(0);
    const [undo, setUndo] = useState([]);
    const [redo, setRedo] = useState([]);

    const increment = () => {
        setUndo([...undo, count]);
        setCount(count + 1);
        setRedo([])
    }

    const decrement = () => {
        setUndo([...undo, count]);
        setCount(count - 1);
        setRedo([]);
    }

    const handleUndo = () => {
        if (undo.length > 0) {
            const lastValue = undo.pop(); 
            setRedo([count, ...redo]); 
            setCount(lastValue); 
            setUndo([...undo]); 
        }
    };

    const handleRedo = () => {
        if (redo.length > 0) {
            const nextValue = redo.shift(); 
            setUndo([...undo, count]); 
            setCount(nextValue); 
            setRedo([...redo]); 
        }
    }

    return (
        <>
        <h1>Counter</h1>
        <br />
        <p>{count}</p>
        <br />
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={handleUndo} disabled={undo.length === 0}>Undo</button>
        <button onClick={handleRedo} disabled={redo.length === 0}>Redo</button>
        </>
    )
};

export default CounterFour;