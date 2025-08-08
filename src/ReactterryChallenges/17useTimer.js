/**https://www.reacterry.com/portal/challenges/use-timer */
/**Write a custom hook called useTimer that manages a 
 * timer starting from the provided value (in seconds). 
 * The hook should be able to store and manage information about whether 
 * the timer is currently running, and the current count of the timer. 
 * It should return an object with four properties. */

/*my solution*/

import styled from 'styled-components';
import { useState, useEffect } from 'react';



const useTimer = (initialCount) => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(initialCount);
  const [intervalId, setIntervalId] = useState(0)

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);

      const timer = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000)
      setIntervalId(timer);
    }
  }

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  }

  const reset = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setCount(0);

  }
  return { start, stop, reset, isRunning, count };
};

const App = () => {
  const { start, stop, reset, isRunning, count } = useTimer(0);

  return (
    <AppWrapper>
      <h1>Timer App</h1>
      <TimerWrapper>
        <h2>Count: {count}</h2>
        <div>
          <Button onClick={start}>Start</Button>
          <Button onClick={stop}>Stop</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </TimerWrapper>
      <h2>{isRunning && 'Timer is active'}</h2>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  background-color: '#fff';
  color: '#333';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


/**Reacterry's solution */

/**
 * 
 * import { useState, useEffect } from 'react';
import styled from 'styled-components';

const useTimer = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setCount(0)
  };

  return { start, stop, reset, isRunning, count };
};

const App = () => {
  const { start, stop, reset, isRunning, count } = useTimer(0);

  return (
    <AppWrapper>
      <h1>Timer App</h1>
      <TimerWrapper>
        <h2>Count: {count}</h2>
        <div>
          <Button onClick={start}>Start</Button>
          <Button onClick={stop}>Stop</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
      </TimerWrapper>
      <h2>{isRunning && 'Timer is active'}</h2>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  background-color: '#fff';
  color: '#333';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
 */