import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/AuthService';
import './Register.css'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData); // Make sure this function is properly implemented in AuthService.js
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;