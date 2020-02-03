import React from 'react';
import '../App.css';
import sample from '../Video.mp4';



function Home() {
  return (
    <div className="App">
      <header className="App-header">
   
        <p> 
        </p>
      </header>
         <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
    </div>
  );
}

export default Home;