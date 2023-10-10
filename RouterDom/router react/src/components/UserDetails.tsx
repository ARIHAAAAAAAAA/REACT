import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { User } from "./UserList";




function UserDetails() {
  const [user, setUser] = useState<User | undefined>(undefined); 
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, [id]);

  return (
    <>
      <h2>User Details</h2>
      {user ? (
        <ul>
          <li>Name: {user.name}</li>
          <li>Phone: {user.phone}</li>
          <li>Email: {user.email}</li>
          <li>Website: {user.website}</li>
          <li>Username: {user.username}</li>
          <li>City: {user.address.city}</li>
        </ul>
      ) : (
        <p>Loading user details...</p>
      )}
    </>
  );
}

export default UserDetails;
