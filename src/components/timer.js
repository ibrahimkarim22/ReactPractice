import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(20);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning && time > 0) {
            const timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer); 
        }
    }, [isRunning, time]);

    const startTimer = () => {
        if (time > 0) {
            setIsRunning(true);
        }
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(20);
    };

    return (
        <>
            <label>Enter Seconds:
                <input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} />
            </label>
            <button onClick={startTimer}>Start Timer</button>
            <p>{time} seconds left</p>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    );
};

export default Timer;
