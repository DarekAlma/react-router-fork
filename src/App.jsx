import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'
import {Home,Contact,Login,Overview} from './pages'
import { AuthProvider, useAuth } from './Context/AuthContext';

const AuthProtection = ({ children }) => {
  const { user} = useAuth();
  const location = useLocation();


  useEffect(() => {
    // Almacenar la ubicación actual en localStorage al cargar la aplicación
    localStorage.setItem('previousLocation', location.pathname);
  }, [location.pathname]);

  if (user) {
    // Si el usuario está autenticado, permitir el acceso a las rutas protegidas
    return children;
  } else {
    // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
    return <Navigate to="/login" replace />;
  }
};


function App() {
  return (
    <Router>
      <AuthProvider>
       <Routes>    
        <Route path="/" element={<AuthProtection><Home/></AuthProtection>} />
        <Route path="/overview" element={<AuthProtection><Overview/></AuthProtection>} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<AuthProtection><Contact/></AuthProtection>} />
        <Route path="/404" element={<div>Not found</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />          
       </Routes>   
     </AuthProvider>
    </Router>
  )
}

export default App
