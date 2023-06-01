import React from "react";
import "./schweppes.css";

const Schweppes = () => {
  return (
    <>
      <div className="video-section">
        <video autoPlay loop className="video">
          <source src="../../../videos/schweppes.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="section">
        <div className="container">
          <div className="textbox">
            <h2>Our purpose is to refresh the world and make a difference</h2>
            <p>
              We are committed to offering people more of the drinks they want
              across a range of categories and sizes while driving sustainable
              solutions that build resilience into our business and create
              positive change for the planet.
            </p>
          </div>
          <div className="imgbox">
            <img src="../../images/img.jpg" alt="Image description" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schweppes;
