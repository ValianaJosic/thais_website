import React from 'react';
import './Nav.css';
import Logo from '../../assets/images/logo.svg';

import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="nav nav-div">
      <NavLink to="/" className="nav-page logo-link"> <img src={Logo} alt="logo" className="logo" /></NavLink>
      <div>
        <NavLink to="/properties" className="nav-page nav-link property-link">Properties</NavLink>
        <NavLink to="/about" className="nav-page nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-page nav-link">Contact</NavLink>
      </div>
      <div class="icon-bar">
        <a href="https://www.facebook.com/Thais-Reyes-357850721490279/" target="_blank" rel="noopener  noreferrer" class="facebook"><i class="fa fa-facebook"></i></a>
        <a href="https://twitter.com/thaisreyes" target="_blank" rel="noopener  noreferrer" class="twitter"><i class="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/thais-reyes-%F0%9F%8F%96-43474526" target="_blank" rel="noopener  noreferrer" class="linkedin"><i class="fa fa-linkedin"></i></a>
      </div>
    </div>
  );
}

export default Navigation;

