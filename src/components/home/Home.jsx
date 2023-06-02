import React, { useEffect } from "react";

import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="video-section">
        <video autoPlay loop muted className="video">
          <source src="../../../videos/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="section"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
      >
        <div className="image-container">
          <img src="../../../images/cocacoke.webp" alt="Image" />
        </div>

        <div className="card-text">
          <h2>A Purpose-Driven History</h2>
          <p>
            The Coca‑Cola Company’s purpose is to refresh the world and make a
            difference and we have remained true to that purpose for 137 years.
          </p>
        </div>
      </div>

      <div className="picture-frame">
        <div className="image-container">
          <h2 className="title">Everywhere</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
