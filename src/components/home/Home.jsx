import React from 'react';

import './home.css';

const Home = () => {

  return (
    <>
    <div className="video-section">
    <video autoPlay loop muted className="video">
      <source src="../../../videos/intro.mp4" type="video/mp4" />
    </video>
  </div>



  </>
  );
};

export default Home;

