import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('cyber_token'));
  const [loading, setLoading] = useState(true);

  // Auto-login or check token on boot
  useEffect(() => {
    if (token) {
      // In a real app, you'd verify the token with the server here
      setUser({ name: 'ShopSmart User' }); 
    }
    setLoading(false);
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem('cyber_token', data.token);
        setToken(data.token);
        setUser(data.user || { name: 'User' });
        return { success: true };
      }
      return { success: false, error: data.error || 'Login failed' };
    } catch (err) {
      return { success: false, error: 'Connection to server failed' };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await fetch('http://localhost:5001/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      
      if (data.user) {
        // Automatic login after signup
        return await login(userData.email, userData.password);
      }
      return { success: false, error: data.error || 'Signup failed' };
    } catch (err) {
      return { success: false, error: 'Connection failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('cyber_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
