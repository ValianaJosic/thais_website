import React from 'react';
import './Nav.css';
import Logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="nav nav-div">
      <NavLink to="/" className="nav-page logo-link"> <img src={Logo} alt="logo" className="logo" /></NavLink>
      <div className="link-div">
        <NavLink to="/properties" className="nav-page nav-link property-link">Properties</NavLink>
        <NavLink to="/about" className="nav-page nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-page nav-link">Contact</NavLink>
      </div>
      <div className="icon-bar">
        <a href="https://www.facebook.com/Thais-Reyes-357850721490279/" target="_blank" rel="noopener  noreferrer" className="facebook"><i className="fa fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/thais-reyes-%F0%9F%8F%96-43474526" target="_blank" rel="noopener  noreferrer" className="twitter"><i className="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/thais-reyes-%F0%9F%8F%96-43474526" target="_blank" rel="noopener  noreferrer" className="linkedin"><i className="fa fa-linkedin"></i></a>
      </div>
    </div>
  );
}

export default Navigation;

