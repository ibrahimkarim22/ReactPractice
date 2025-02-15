import {useEffect, useState} from 'react';


const Countries = () => {

const [countries, setCoutnries] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
    fetchCountries();
}, [])

const fetchCountries = async () => {
    try{
        setLoading(true);
        setError(null);

        const  response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const shuffledCountries = data.sort(() => Math.random() - 0.5)
        setCoutnries(shuffledCountries);
    } catch(err) {
        setError('failed to load');
    } finally{
        setLoading(false);
    }
    
}

return(
    <>
    
    <div>
        <h1>countries</h1>
        <button onClick={fetchCountries}>load</button>
    </div>

    {loading && <p>loading...</p>}
    {error && <p>{error}</p>}


    {countries.slice(0, 5).map((country) => (
        <div key={country.name}>
            <img src={country.flags.png} />
            <p>{country.name.common}</p>
            <p>Population: {country.population.toLocaleString()}</p>
        </div>
    ))}
    </>
)


}

export default Countries;