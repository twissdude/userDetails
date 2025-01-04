
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError('Failed to fetch users.'));
  }, []);

  return (
    <div className="home-container">
      <h1>User List</h1>
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <Link to={`/user/${user.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
