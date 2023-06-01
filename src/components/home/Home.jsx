import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import './home.css';

const Home = () => {
  return (
    <>
      <Controller>
        <Scene duration={500} triggerElement=".video-section">
          {(progress) => (
            <div className="video-section">
              <video autoPlay loop muted className="video">
                <source src="../../../videos/intro.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </Scene>

        <Scene duration={500} triggerElement=".section">
          {(progress) => (
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
          )}
        </Scene>

        <Scene duration={300} triggerElement=".picture-frame">
          {(progress) => (
            <div className="picture-frame">
              <div className="image-container">
                <h2 className="title">Everywhere</h2>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
    </>
  );
};

export default Home;
