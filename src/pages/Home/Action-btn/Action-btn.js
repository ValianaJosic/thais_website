import React from 'react';
import '../Action-btn/Action-btn.css';
import { NavLink } from 'react-router-dom';


function Actionbtn() {

    return (
        <div className="action-btn">
            <NavLink to="/properties" className="home-btn"> Our Properties</NavLink>
        </div>
    )
};

export default Actionbtn;