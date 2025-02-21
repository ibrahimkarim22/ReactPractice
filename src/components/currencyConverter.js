import {useEffect, useState} from 'react';

const API = 'https://api.exchangerate-api.com/v4/latest/USD'

const CurrencyConverter = () => {



    const [currencies, setCurrencies] = useState({})
    const [fromRate, setFromRate] = useState(1);
    const [toRate, setToRate] = useState(1);
    const [userInput, setUserInput] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FETCH_CURRENCIES = async () => {
            try{
                const response = await fetch(API);
                const data = await response.json();
                setCurrencies(data.rates);
                console.log(data.rates);
            } catch(err) {
                console.error('cannot fetch', err);
            } finally {
                setLoading(false);
            }
        }
        FETCH_CURRENCIES();
    }, [])

    const convertCurrency = () => {
        return userInput * (toRate / fromRate);
    }

    return (
        <>
        <h1>Currency Converter</h1>
  
        <p>From:</p>
        <select onChange={(e) => setFromRate(currencies[e.target.value])}>
          {Object.entries(currencies).map(([currency, rate]) => (
            <option key={currency} value={currency}>
              {currency} - {rate}
            </option>
          ))}
        </select>
  
        <p>To:</p>
        <select onChange={(e) => setToRate(currencies[e.target.value])}>
          {Object.entries(currencies).map(([currency, rate]) => (
            <option key={currency} value={currency}>
              {currency} - {rate}
            </option>
          ))}
        </select>
  
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
  
        <p>Converted Amount: {convertCurrency().toFixed(2)}</p>
      </>
    )
};

export default CurrencyConverter;