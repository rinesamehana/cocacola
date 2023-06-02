import React from "react";
import "./schweppes.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
            <h2>Enjoy this sturdy drink with some sweet people! 🙌  </h2>
            <p>
              We are committed to offering people more of the drinks they want
              across a range of categories and sizes while driving sustainable
              solutions that build resilience into our business and create
              positive change for the planet.
            </p>
          </div>
          <div className="imgbox">
            <Carousel
              autoPlay
              interval={2000}
              infiniteLoop
              showStatus={false}
              showThumbs={false}
            >
              <div>
                <img src="../../images/img.jpg" alt="Slide 1" />
              </div>
              <div>
                <img src="../../images/img1.jpg" alt="Slide 2" />
              </div>
              <div>
                <img src="../../images/img2.jpg" alt="Slide 3" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div class="cover-section">
        <img src="../../images/img3.jpg" alt="Cover Image" />
      </div>
    </>
  );
};

export default Schweppes;
