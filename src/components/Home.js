import React from 'react';
import '../App.css';
import sample from '../Video.mp4';
import thais from '../thais.jpg'


function Home() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="profile-wrapper">
      <div className="profile">
        <div className="img">
        <img src={thais} alt="thais" className="thais"/>
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
          <p className="about">

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
    <div>
      <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
     </video>
    </div>
    </div>
    </div>
  );
}

export default Home;