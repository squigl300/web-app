import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check localStorage for a user token on app start
    const userToken = localStorage.getItem('userToken');
    
    if (userToken) {
      // Here, we're directly setting the currentUser based on the token
      // You might want to replace this with a more secure validation step
      setCurrentUser({ token: userToken });
      
      // In a real app, consider validating the token with the backend
      // to ensure it's still valid and to fetch the user's details
    }
  }, []);

  const login = (userData, token) => {
    // Here, you should update to handle the userData and token properly
    // Store the token in localStorage to maintain session across refreshes
    localStorage.setItem('userToken', token);
    setCurrentUser(userData); // Assuming userData contains the necessary user info
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
