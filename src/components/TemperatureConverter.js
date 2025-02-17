import {useState, useEffect} from 'react';


const TemperatureConverter = () => {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const CELSIUS = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit(value !== '' ? ((parseFloat(value) * 9) / 5 + 32).toFixed(1) : '');
    }

    const FAHRENHEIT = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(value !== '' ? (((parseFloat(value) - 32) * 5) / 9).toFixed(1) : '');
    }

    return (

        <>
        <label> celsius:
            <input type='number' value={celsius} onChange={CELSIUS} />
        </label>

        <label> fahrenheit:
            <input type='number' value={fahrenheit} onChange={FAHRENHEIT} />
        </label>
        </>
    )
};

export default TemperatureConverter;