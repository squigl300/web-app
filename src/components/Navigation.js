import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <nav>
      <div className="account-icon">
        {/* Account icon and dropdown logic here */}
        {currentUser ? (
          <div>
            {/* Display user information or avatar */}
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;