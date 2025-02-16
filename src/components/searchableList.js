import {useEffect, useState} from 'react';


const SearchableList = () => {

    const api = 'https://jsonplaceholder.typicode.com/users';

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");


    const fetching = async () => {
        try{
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error('failed to fetch')
            }
            const resolve = await response.json();
            setData(resolve);
        }catch(err) {
            setError('failed to fetch');
            console.log(err);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetching();
    }, [])

    const filteredData = data.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (

        <>
         <h2>Search Users</h2>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <div key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
                                <p><strong>Name:</strong> {item.name}</p>
                                <p><strong>Email:</strong> {item.email}</p>
                                <p><strong>City:</strong> {item.address.city}</p>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </>
            )}

            <button onClick={fetching}>Reload Data</button>
        
        </>


    )

}

export default SearchableList;