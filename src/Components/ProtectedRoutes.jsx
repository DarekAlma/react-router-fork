import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { Route } from 'react-router-dom';

// Componente para una ruta protegida
export const ProtectedRoute = ({ element, ...rest }) => {
    const { user } = useAuth(); // Obtener el estado de autenticación del contexto

    // Si el usuario está autenticado, renderizar el elemento de la ruta, de lo contrario, redirigir al login
       if (user) {
        // Si el usuario está autenticado, renderizar el elemento de la ruta
        return <Route {...rest} element={element} />;
    } else {
        // Si el usuario no está autenticado, redirigir al login
        return <Navigate to="/login" replace />;
    }
 
};


