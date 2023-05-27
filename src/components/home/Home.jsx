import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import './home.css';

const Home = () => {

  return (
    <>
     <Controller>
    <div className="video-section">
    <video autoPlay loop muted className="video">
      <source src="../../../videos/intro.mp4" type="video/mp4" />
    </video>
  </div>
   

  <div className="section">
      <div className="image-container">
        <img src="../../../images/cocacoke.webp" alt="Image" />
      </div>

      <div className="card-text">
             <h2>A Purpose-Driven History</h2>
           <p>
           The Coca‑Cola Company’s purpose is to refresh the world and make a difference and we have remained true to that purpose for 137 years.
           </p>
      </div>

    </div>
    <div className="picture-frame">
      <div className="image-container">
        <h2 className="title">Everywhere</h2>
      </div>
    </div>
    </Controller>

  </>
  );
};

export default Home;

