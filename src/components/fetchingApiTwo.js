import {useEffect, useState} from 'react';



const FetchApiTwo = () => {

    const api = 'https://jsonplaceholder.typicode.com/users'

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchingApi = async () => {
        try{
        setLoading(true);
        setError(null);

        const response = await fetch(api);

        if (!response.ok) {
            throw new Error('failed to fetch data');
        }
        const resolve = await response.json();
        setData(resolve);

        } catch (err) {
            setError('fetch failed');
            console.log(err);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchingApi();
    }, [])

    return (
        <>
        {loading ? (
            <p>loading...</p> 
        ) : error ? (
            <p>{error}</p>
        ) : (
        data.map((item, index) => (
            <div key={index}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.address.city}</p>
            
            </div>
        ))
    )}

    <button onClick={fetchingApi}>Reload Data</button>
        </>
    )

}

export default FetchApiTwo;