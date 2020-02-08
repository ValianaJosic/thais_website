import React from 'react';
import '../App.css';
import Logo from '../logo.svg';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
      <div className="nav-div">
          <div className="nav">
              <img src={Logo} alt="logo" className="logo"/>
          <NavLink to="/"  className="nav-page">Home</NavLink>
          <NavLink to="/properties"  className="nav-page">Properties</NavLink>
          <NavLink to="/about"  className="nav-page">About</NavLink>
          <NavLink to="/contact"  className="nav-page">Contact</NavLink>
          </div>
       </div>
    );
}
 
export default Navigation;