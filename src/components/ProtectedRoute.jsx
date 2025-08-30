import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token is found in localStorage, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If a token exists, render the child component (our dashboard)
  return children;
};

export default ProtectedRoute;