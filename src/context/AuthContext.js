import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      console.log('Logging in with username:', username);
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      setUser(response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === 'Invalid credentials') {
        throw new Error('Invalid username or password');
      } else {
        console.error('Server Error:', error.response.data);
        console.error('Status Code:', error.response.status);
        console.error('Headers:', error.response.headers);
        throw new Error('Server Error');
      }
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
