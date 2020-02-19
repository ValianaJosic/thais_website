import React from 'react';
import './Home.css';
import Thais from '../../assets/images/thais.jpg';
import classes from './Home.css';


function Home() {
  return (  
    <div className="App">
  <div className={classes.Container} >
      <video autoPlay="autoplay" loop="loop" muted className="video">
        <source src="https://s3.us-east-2.amazonaws.com/thais.website/miami.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
  </div>
    <div class="icon-bar">
      <a href="https://www.facebook.com/Thais-Reyes-357850721490279/"  target="_blank" rel="noopener  noreferrer" class="facebook"><i class="fa fa-facebook"></i></a>
      <a href="https://twitter.com/thaisreyes" target="_blank" rel="noopener  noreferrer" class="twitter"><i class="fa fa-twitter"></i></a>
      <a href="https://www.linkedin.com/in/thais-reyes-%F0%9F%8F%96-43474526" target="_blank" rel="noopener  noreferrer" class="linkedin"><i class="fa fa-linkedin"></i></a>
  </div>
    <div className="profile-wrapper">
      <div className="profile">
      </div>
          <p className="about">
            <p className="contact">Thais Reyes
            <br></br>
            Real Estate Advisor
            <br></br>
            thais.reyes@compass.com
            <br></br>
            M: 786.546.0440
          </p>
                Thais Reyes is an experienced Real Estate advisor, a Venezuelan native, who moved to Miami in 1995, captivated by the beauty of Miami, from its pristine beaches, excellent year round weather, cultural diversity, lifestyle, and ever-growing industries. Thais is adamant about the advantages of owning property in South Florida.
                <br></br>
                Thais has a passion for the real estate profession, dedication, attention to detail, strong negotiation skills, efficient real estate transactions process and has successfully closed commercial leases as well as residential real estate transactions.<br></br>
                <br></br>
                She has ample experience with in-house development sales (pre-construction) and has worked in high profile condo development projects such as; Infinity at Brickell, Skyline at Brickell, Grove at Grand Bay in Coconut Grove. In addition, she had exclusively listed a boutique building and sold the entire building in South Beach.
                <br></br>
                She is proficient in marketing, business networking, presentation skills and is committed to achieving her client's real estate goals. <br></br>
                <br></br>
                Her approach to each real estate transaction is goals-driven and personable. Thais consistently aims to help her clients achieve their property's acquisition or lease goals.
                <br></br>
                Encompassing all markets of experience, from Sunny Isles, Miami Beach, Coconut Grove to Brickell Avenue (Miami's Financial District).
                <br></br>
                Thais is a resident of Miami Beach, she enjoys cooking, dining, reading, spending quality time with family.
          </p>
        <div className="img">
          <img src={Thais} alt="thais" className="thais"/>
        </div>
    </div>
    
    </div>
  );
}

export default Home;