

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Get the API URL from the environment variable
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Use the apiUrl variable for the fetch request
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');
      
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      navigate('/admin/dashboard');
    } catch (error) {
      alert(`Login Failed: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="text-sm font-semibold text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password"className="text-sm font-semibold text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;