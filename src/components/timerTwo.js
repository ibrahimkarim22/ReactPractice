import {useState, useEffect} from 'react';


const TimerTwo = () => {

    const [time, setTime] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
 

    useEffect(() => {
        let TIMER; 
        if (isStarted) {
           TIMER = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000)
        }
        return () => clearInterval(TIMER);

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
};

export default TimerTwo;