import React from 'react';
import './Home.css';
import Profile from './Profile/Profile';
import Actionbtn from './Action-btn/Action-btn';
import Video from '../../assets/Videos/miami.mp4';
import Scroll from '../Home/Scroll/Scroll';
import Iframe from 'react-iframe';

function Home() {
  return (
    <div >
      <div className="video-div" >
        <video autoPlay="autoplay" loop="loop" muted className="video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <Actionbtn/>
      <Scroll/>
      </div>
      {/* Profile Section */}
      <Profile/>
      <div className="iframe-mock-home">
    <Iframe url="https://www.compass.com/homes-for-sale/_map/mapview=25.845208,-80.221764,25.793135,-80.297037/?omniboxAttemptId=0fe60769-741a-4fde-9fd3-008725d82e07"
        width="100%"
        height="500px"
        display="initial"
        position="relative"
        title='home-search'/>
        </div>
        {/* <div>
        <Iframe url="https://www.compass.com/marketing/email/1617e0d2-f01a-49ae-93c3-3e8ce32e342c.html"
        width="100%"
        height="3310px"
        display="initial"
        position="relative"/>
        </div> */}
    </div>
  );
}

export default Home;