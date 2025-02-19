import {useState} from 'react';

const SearchableListTwo = () => {

    const [names, setNames] = useState(['Alice', 'Bob', 'Chralie', 'David', 'Eve']);
    const [search, setSearch] = useState('');
    
    const filteredNames = names.filter(name => name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
        <label> Search:
            <input placeholder='enter name...' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>

        <ul>
            {filteredNames.length > 0 ? (
                filteredNames.map((name, index) => <li key={index}>{name}</li>)
            ) : (
                <li>result not found</li>
            )}
        </ul>

        </>
    )
};

export default SearchableListTwo;