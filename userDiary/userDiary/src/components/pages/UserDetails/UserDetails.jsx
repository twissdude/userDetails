// File: src/pages/UserDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((err) => setError('Failed to fetch user details.'));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-details">
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}`}</p>
    </div>
  );
};

export default UserDetails;
