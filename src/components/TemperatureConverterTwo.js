import {useState} from 'react';


const TemperatureConverterTwo = () => {

    const [cel, setCel] = useState(0);
    const [fah, setFah] = useState(32);


    const CEL = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setCel(value);
        setFah(() => {
            return (value * 9/5) + 32;
        })
    }

    const FAH = (e) => {
        const value = parseFloat(e.target.value) || 0;
        setFah(value);
        setCel(() => {
           return (value - 32) *5/9
        })
    }

    return (
        <>
            <label>Celsius
                <input type='number' value={cel} onChange={CEL}/>    
            </label>        

            <label>Fahrenheit
                <input type='number' value={fah} onChange={FAH}/>
            </label>
        </>
    )
};

export default TemperatureConverterTwo;