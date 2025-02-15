import {useEffect, useState} from 'react'


const Counter = () => {


    const [count, setCount] = useState(() => {
        const store = localStorage.getItem("count");
        return store ? JSON.parse(store) : 0;
    })

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count])

    function increase() {
        const newCount = count + 1;
        setCount(newCount)
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert('cant go below 0')
        }
    }
  
    function reset() {
        setCount(0);
        localStorage.removeItem("count")
    }


    return (
    <>
      <div className="counter-text">{count}</div>
      <div className="buttons">
        <button className="inc-but" onClick={increase}>+</button>
        <button className="dec-but" onClick={decrease}>-</button>
      </div>
      <div className="reset-but">
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
};

export default Counter;
