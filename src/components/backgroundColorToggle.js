import {useState} from 'react';

const BackgroundColorToggle = () => {

    const [mode, setMode] = useState(true);

    const TOGGLE = () => {
        if (mode) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = "black";
            setMode(false);
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            setMode(true);
        }
    }

    return(
        <>
        <h1>background Color Mode Toggle</h1>
        <button onClick={TOGGLE}>{mode ? 'light' : 'dark'}</button>
        </>
    )
};

export default BackgroundColorToggle;