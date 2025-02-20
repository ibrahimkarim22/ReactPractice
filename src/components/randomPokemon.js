import {useState, useEffect} from 'react';


const RandomPokemon = () => {

const API = 'https://pokeapi.co/api/v2/pokemon?limit=1000'

const [pokemons, setPokemons] = useState([]);
const [pokemon, setPokemon] = useState({name: '', url: ''})
const [loading, setLoading] = useState(true);

useEffect(() => {
    const getApi = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setPokemons(data.results);
            setPokemon(data.results[Math.floor(Math.random() * data.results.length)])
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
    getApi();
}, [])

    const randomPick = () => {
        if (pokemons.length > 0) {
        let pokemonIndex = Math.floor(Math.random() * pokemons.length);
        setPokemon(pokemons[pokemonIndex])
        }
    }


    return (
        <>
        {loading ? (
            <p> loading...</p>
        ) : (
            <div>
            <img src={pokemon.url} alt='dog' />
            <p>{pokemon.name}</p>
           
    
            <button onClick={randomPick}>generate</button>
        </div>
        )
        }
        
        
        </>
    )
};

export default RandomPokemon;