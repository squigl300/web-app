import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check localStorage for a user token on app start
    const userToken = localStorage.getItem('userToken');
    
    if (userToken) {
      // Directly setting the currentUser based on the token
      // Needs replaced with a more secure validation step
      setCurrentUser({ token: userToken });
      
      // validating the token with the backend needs done
      // to ensure it's still valid and to fetch the user's details
    }
  }, []);

  const login = (userData, token) => {
    // Should be updated to handle the userData and token properly
    // Store the token in localStorage to maintain session across refreshes
    localStorage.setItem('userToken', token);
    setCurrentUser(userData); // userData needs to contain the necessary user info
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('userToken'); // Clear the token from localStorage on logout
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
