import React from 'react';
// import Listings from '../Properties/Carousel/Carousel';
// import PersonList from '../Properties/service/service';
import Iframe from 'react-iframe';
import '../Properties/Properties.css';

function Home() {
  return (
    <div>
    {/* <Listings/>
    <PersonList/> */}
    <div className="iframe-mock">
    <Iframe url="https://www.compass.com/homes-for-sale/_map/mapview=25.845208,-80.221764,25.793135,-80.297037/?omniboxAttemptId=0fe60769-741a-4fde-9fd3-008725d82e07"
        width="100%"
        height="500px"
        display="initial"
        position="relative"/>
        </div>
    </div>
  );
}

export default Home;

