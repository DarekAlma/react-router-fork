import React from 'react'
import { NavLink } from 'react-router-dom'

const Overview = () => {
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
    </div>
  )
}
export default Overview
