import React from 'react';
import '../App.css';
import sample from '../Video.mp4';



function Home() {
  return (
    <div className="App">
      <div className="nav-div">
      <nav className="nav">
          <ul>
            <li><a href="index.html" className="nav-page current-page">Home</a></li>
            <li><a href="projects.html" className="nav-page">Projects</a></li>   
            <li><a href="contact.html" className="nav-page">Contact</a></li>   
          </ul>
      </nav>
      </div>
      <header className="App-header">
      <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
        <p> 
        </p>
      </header>
    </div>
  );
}

export default Home;