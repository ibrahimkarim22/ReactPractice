import {useState, useEffect} from 'react';


const api = 'https://dog.ceo/api/breeds/image/random'

const Dogs = () => {

    const [dogs, setDogs] = useState("");
    const [loading, setLoading] = useState(true);

    const getDogs = async () => {
        setLoading(true);
        try {
            const response = await fetch(api);
            const data = await response.json();
            setDogs(data.message);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDogs();
    }, [])


    return (
        <>
            <h1>Dogs Generator</h1>
        {loading && <p>loading...</p>}
            {!loading && <img alt='dog' src={dogs} width='300px' /> }
            
            
            <button onClick={getDogs}>generate</button>
          
        </>
    )
}

export default Dogs;