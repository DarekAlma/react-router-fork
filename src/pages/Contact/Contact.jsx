import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';

const Contact = () => {

  const {logoutcito} =useAuth();

  const handleLogout = () => {
    logoutcito();
  };

  return (
    <div>
        <h1>Contact</h1>
        {/*Navegacion entre paginas*/}
        <NavLink to="/login">
            Login
        </NavLink>
        <p>/</p>
        <NavLink to="/">
            Home
        </NavLink>
        <p>/</p>
        <NavLink to="/overview">
            overview
        </NavLink>

        <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Contact
