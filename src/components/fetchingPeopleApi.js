import { useEffect, useState} from "react";

const PeopleList = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetchPeople();
    }, [])

const fetchPeople = async () => {
    try {
        setLoading(true);
        setError(false);

        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        setPeople(data.results);
    } catch (err) {
        setError('failed to load');
    
    } finally {
        setLoading(false);
    }
}

return (
    <>
    <button onClick={fetchPeople}>generate</button>
    {loading && <p>loading...</p>}
    {error && <p>{error}</p>}
 {people.map((person) => (
    <div key={person.login.uuid}>
        <img src={person.picture.large} alt="person" />
        <p>{person.name.first} {person.name.last}</p>
        <p>{person.email}</p>
    </div>
 ))}
    
    
    </>
)


}

export default PeopleList;