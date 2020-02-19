 
import React from 'react';
import Thais from '../assets/images/thais.jpg';
 
const Contact = () => {
    return (
      <div className="profile contact">
      <div className="img">
      <img src={Thais} alt="thais" className="thais"/>
      </div>
      <div className="contact-div">
      <p className="contact">Thais Reyes
         <br></br>
          Real Estate Advisor
          <br></br>
          thais.reyes@compass.com
          <br></br>
          M: 786.546.0440
      </p>
      </div>
      </div>
    );
}
 
export default Contact;