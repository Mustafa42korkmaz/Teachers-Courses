import React from 'react'
import "../css/nav.css"
import { Link, NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
        <Link to="/">
            RegalTech
        </Link> </div>
        <nav className='menu'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/teacher">Teacher</NavLink>
            <NavLink to="/paths">Paths</NavLink>
            <NavLink to="/contact">Contact</NavLink>

        </nav>
    </div>
  )
}

export default Nav