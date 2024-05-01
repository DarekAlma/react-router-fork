import React, { useState, useContext } from 'react';
import { NavLink, Navigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';


const Login = () => {
    const {logincito } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      logincito(email, password);
      setEmail('');
      setPassword('');   
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Correo Electrónico:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
          <label>
                Contraseña:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
          </label>
            <button type="submit">Iniciar Sesión</button>
        </form>
        <h1>Login</h1>
        {/*Navegacion entre paginas*/}
        <NavLink to="/">
            Home
        </NavLink>
        <p>/</p>
        <NavLink to="/contact">
            contact
        </NavLink>
        <p>/</p>
        <NavLink to="/overview">
            overview
        </NavLink>
    </div>
  );
}
export default Login
