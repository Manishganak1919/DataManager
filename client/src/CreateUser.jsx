import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
{/** navigate menas moving back to endpoint , after performing operation */}
const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/createUser', { name, email, age })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-75 w-md-50 w-lg-25 bg-white rounded p-3'>
        <form onSubmit={submitHandler}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Name'
              className='form-control'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder='Enter Email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              id='age'
              placeholder='Enter Age'
              className='form-control'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
