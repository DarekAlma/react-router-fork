import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';

const Overview = () => {

  const {logoutcito} =useAuth();

  const handleLogout = () => {
    logoutcito();
  };
  return (
    <div>
        <h1>Overview</h1>
        {/*Navegacion entre paginas*/}
        <p>/</p>
        <NavLink to="/contact">
            contact
        </NavLink>
        <p>/</p>
        <NavLink to="/">
            home
        </NavLink>

        <button onClick={handleLogout}>Logout</button>

    </div>
  )
}
export default Overview
