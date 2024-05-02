import React from 'react'
import { NavLink } from 'react-router-dom'

const Overview = () => {

  const handleLogout = () => {
    logoutcito();
  };

  return (
    <div>
        <h1>Overview</h1>
        {/*Navegacion entre paginas*/}
        <NavLink to="/login">
            Login
        </NavLink>
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
