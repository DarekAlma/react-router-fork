import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
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
    </div>
  )
}

export default Contact
