import {useState, useEffect} from 'react';

const Debounced = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [loading, setLoading] = useState(true);

    const API = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {

        const FETCH = async () => {
        try {
            const response = await fetch(API);
            const userList = await response.json();
            setUsers(userList);
        } catch(err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
    FETCH();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 1000);
        return () => clearTimeout(handler);
    }, [search])

//    const filteredUsers = users.filter(user => {
//     user.name.toLowerCase().includes(search.toLowerCase())
//    })

    return(
        <>
        <label>
            <input type='text' placeholder='search users...' value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user, index) => {
                        
                        const isMatch = user.name.toLowerCase().includes(debouncedSearch.toLowerCase());

                        return (
                            <li key={index} style={{ fontWeight: isMatch ? "bold" : "normal", color: isMatch ? "blue" : "black" }}>
                                {user.name}
                            </li>
                        );
                    })}
                </ul>
            )}
        
        </>
    )
};

export default Debounced;