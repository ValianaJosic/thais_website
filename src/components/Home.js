import React from 'react';
import '../App.css';
import sample from '../Video.mp4';
import thais from '../thais.jpg'


function Home() {
  return (
    <div className="App">
      <header className="App-header">
   
        <p> 
        </p>
      </header>
      <div>
        <img src={thais} alt="thais" className="thais"/>
         <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
    </div>
    </div>
  );
}

export default Home;