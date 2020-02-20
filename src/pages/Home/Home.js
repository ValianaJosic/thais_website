import React from 'react';
import './Home.css';
import Profile from './Profile/Profile'
import Actionbtn from './Action-btn/Action-btn'
import Video from '../../assets/Videos/miami.mp4'

function Home() {
  return (
    <div>
      <div className="video-div" >
        <video autoPlay="autoplay" loop="loop" muted className="video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <Actionbtn/>
      </div>
      {/* Profile Section */}
      <Profile/>
    </div>
  );
}

export default Home;