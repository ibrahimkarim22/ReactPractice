import {useState, useEffect} from 'react';

const RandomCountry = () => {

    const API = 'https://restcountries.com/v3.1/all'


    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const FETCH_COUNTRIES = async () => {
            try{
                const response = await fetch(API);
                const data = await response.json();
                setCountries(data);
                setCountry(data[Math.floor(Math.random() * data.length)])
                console.log(data);
            } catch(err) {
                console.error('failed to fetch', err);
            } finally {
                setLoading(false)
            }
        }
        FETCH_COUNTRIES();
    }, [])


    const RANDOM_COUTNRY = () => {
        let countryIndex = Math.floor(Math.random() * countries.length);
        setCountry(countries[countryIndex])
        console.log(countries[countryIndex])
    }

    return(
        <>
        {loading ? (<p>loading...</p> 
        ):(
            <div>

                <img src={country?.flags?.png} alt='country flag'/>
                <p>{country?.name?.common}</p>
                <p>{country?.capital}</p>

                <button onClick={RANDOM_COUTNRY}>Generate</button>
            </div>
        ) }
        </>
    )
};

export default RandomCountry;