import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


 const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
  };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay un usuario almacenado en localStorage al cargar la aplicación
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logincito = (email, password) => {
    // Lógica de autenticación
    if (email === 'admin@admin.com' && password === 'admin') {
      setUser({ email});
      localStorage.setItem('user', JSON.stringify({ email}));
      navigate('/');
     
    }
  };


  const logoutcito = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login'); 
  };

  return (
    <AuthContext.Provider value={{ user, logincito, logoutcito}}>
      {children}
    </AuthContext.Provider>
  );
};