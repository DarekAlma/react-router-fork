import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 

const Admin = ({ path, element: Element, ...rest }) => {
  const { user } = useAuth();

  // Verificar si el usuario es un administrador
  const isAdmin = user && user.role === 'admin';

  // Función para renderizar el elemento basado en la autenticación del usuario
  const renderElement = () => {
      if (isAdmin) {
          return <Element />;
      } else {
          return <Navigate to="/" replace />;
      }
  };

  // Retornar el componente Route con la verificación de autenticación en su elemento
  return <Route {...rest} path={path} element={renderElement} />;
 
};
export default Admin
