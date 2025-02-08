import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      setError("failed to load users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="users-main">
        <div className="users-title">Random Users</div>
        <button className="refresh" onClick={fetchUsers}>Refresh Users</button>

        {loading && <p style={{color: 'green', fontSize: '22px'}}>Loading...</p>}
        {error && <p style={{color: 'red', fontSize: '22px'}}>{error}</p>}

        {users.map((user) => (
            <div key={user.login.uuid}>
                <div  className="user-image" >
                <img src={user.picture.large} alt="user" />
                </div>
                <p className="user-name">{user.name.first} {user.name.last} </p>
                <p className="user-email">{user.email}</p>

            </div>
        ))}

      </div>

    </>
  );
};

export default UsersList;
