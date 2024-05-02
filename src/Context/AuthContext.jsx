import React, { createContext, useState, useContext } from 'react';

 const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
  };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logincito = (email, password) => {
    // Lógica de autenticación
    if (email === 'admin@admin.com' && password === 'admin') {
      setUser({ email });
      localStorage.setItem('user', JSON.stringify({ email }));
    }
  };

  const logoutcito = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, logincito, logoutcito }}>
      {children}
    </AuthContext.Provider>
  );
};