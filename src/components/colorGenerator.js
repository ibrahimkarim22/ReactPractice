import {useState, useEffect} from 'react';

const ColorGenerator = () => {

    const [color, setColor] = useState('rgb(255, 255, 255)');

    const generator = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256)
        setColor(`rgb(${r}, ${g}, ${b})`)
    }


    return(
        <>
        <div style={{ backgroundColor: color, width: '80vw' , height: '50vh', alignContent: 'center', justifyContent: 'center'}}>
            <p style={{ textAlign: 'center'}}>color {color}</p>
        </div>
            
            <button onClick={generator}>Change Color</button>
        
        </>
    )
};

export default ColorGenerator;