import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080')
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex flex-column vh-100 bg-primary align-items-center justify-content-center'>
      <div className='w-75 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success mb-3'>Add +</Link>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user._id}`} className='btn btn-success mr-2'>Update</Link>
                      <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
