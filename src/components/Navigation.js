import React from 'react';
import '../App.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      <div classNam="nav-div">
          <NavLink to="/"  className="nav-page">Home</NavLink>
          <NavLink to="/about"  className="nav-page">About</NavLink>
          <NavLink to="/contact"  className="nav-page">Contact</NavLink>
       </div>
    );
}
 
export default Navigation;