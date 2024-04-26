import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../services/AuthService';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // No need for useContext if we're temporarily bypassing authentication for navigation
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(email, password);
      // set the user's logged-in status and token
      console.log('Login successful:', token); // Placeholder console.log
      navigate('/dashboard'); // Navigate to the Dashboard after login
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : 'Login error');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>
        <input type="text" className="login-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="login-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="login-button">Sign In</button>
        <button type="button" onClick={() => navigate('/forgot-password')} className="login-button">
        Forgot Password
      </button>
        {/* Temporary Dashboard Access (For development purposes only) */}
        <button type="button" onClick={() => navigate('/dashboard')} className="login-button">Access Dashboard (Temp)</button>
        {/* Link to Registration Page */}
        <p>Don't have an account? <Link to="/register">Register Here</Link></p>
      </form>
    </div>
  );
};

export default Login;

