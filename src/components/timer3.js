import {useState, useEffect} from 'react';

const TimerThree = () => {

    const [time, setTime] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        let timer; 
        if (isStarted) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000)
        }
        return () => clearInterval(timer);
    }, [isStarted])

    return(
        <>
        <h1>Timer</h1>

        <p>Time: {time} seconds</p>
        <button onClick={() => setIsStarted(true)} disabled={isStarted}>start</button>
        <button onClick={() => setIsStarted(false)} disabled={!isStarted}>pause</button>
        <button onClick={() => {setTime(0); setIsStarted(false)}}>reset</button>
        </>
    )
}

export default TimerThree;