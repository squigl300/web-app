import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../services/AuthService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage('Check your email for further instructions');
      setError('');
    } catch (error) {
      setError('Failed to reset password');
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={() => navigate('/login')}>Back to Login</button>
    </div>
  );
};

export default ForgotPassword;