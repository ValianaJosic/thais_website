import React from 'react';
import './Home.css';
import classes from './Home.css';
import Profile from './Profile/Profile'


function Home() {
  return (
    <div className="App">
      <div className={classes.Container} >
        <video autoPlay="autoplay" loop="loop" muted className="video">
          <source src="https://s3.us-east-2.amazonaws.com/thais.website/miami.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      </div>
      {/* Profile Section */}
      <Profile/>
    </div>
  );
}

export default Home;