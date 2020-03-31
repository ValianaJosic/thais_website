
// import React from 'react';
import AboutIMG from '../../assets/images/about-img.jpeg';
import '../About/About.css';
import React, { Fragment } from 'react';
import Contactbtn from '../Contact/Contact-btn/Contact-btn'

const About = () => {
  return (
    <Fragment>
      <div className="about-contain">
        <div className="name-div">
          <p className="name">Meet <br></br> Thais Reyes</p>
        </div>
        <div className="profile-about">
          <p className="about-page">
            Thais Reyes is an experienced Real Estate advisor, a Venezuelan native, who moved to Miami in 1995, captivated by the beauty of Miami, from its pristine beaches, excellent year round weather, cultural diversity, lifestyle, and ever-growing industries. Thais is adamant about the advantages of owning property in South Florida.
            <br></br>
            <br></br>
            Thais has a passion for the real estate profession, dedication, attention to detail, strong negotiation skills, efficient real estate transactions process and has successfully closed commercial leases as well as residential real estate transactions.<br></br>
            <br></br>
            She has ample experience with in-house development sales (pre-construction) and has worked in high profile condo development projects such as; Infinity at Brickell, Skyline at Brickell, Grove at Grand Bay in Coconut Grove. In addition, she had exclusively listed a boutique building and sold the entire building in South Beach.
                <br></br>
            She is proficient in marketing, business networking, presentation skills and is committed to achieving her client's real estate goals. <br></br>
            <br></br>
            Her approach to each real estate transaction is goals-driven and personable. Thais consistently aims to help her clients achieve their property's acquisition or lease goals.
                <br></br>
                <br></br>
            Encompassing all markets of experience, from Sunny Isles, Miami Beach, Coconut Grove to Brickell Avenue (Miami's Financial District).
                <br></br>
            Thais is a resident of Miami Beach, she enjoys cooking, dining, reading, spending quality time with family.
          </p>
          <div className="img-about">
            <img src={AboutIMG} alt="thais" className="about-img" />
          </div>
        </div>
        <div className="contact-div">
        <Contactbtn />
        </div>
      </div>
    </Fragment>
  );
}

export default About;