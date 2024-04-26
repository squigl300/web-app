// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Make sure this path is correct

const ProtectedRoute = ({ children }) => {
  //const { currentUser } = useAuth(); // Correctly access currentUser from context

  // If currentUser exists (i.e., if the user is logged in), render the children components;
  // otherwise, redirect to the login page.
  //return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
