import React from 'react';
import './about.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  return (
    <>
  <div class="container">
  <h2 class="title">
    <span class="title-word title-word-1">OUR</span>
    <span class="title-word title-word-2">COMPANY</span>
    <span class="title-word title-word-3">COCA</span>
    <span class="title-word title-word-4">COLA</span>
  </h2>
</div>




<div className="video-section">
    <video autoPlay loop muted className="video">
      <source src="../../../videos/company.mp4" type="video/mp4" />
    </video>
  </div>



      <div className="cover-slider">
      <Carousel autoPlay interval={2000} infiniteLoop showStatus={false} showThumbs={false}>
        <div>
          <img src="https://www.coca-colacompany.com/content/dam/journey/au/en/our-company/Our%20Company%20Module%20Suggestion.png" alt="Slide 1" />
        </div>
        <div>
          <img src="https://cdn.trendhunterstatic.com/thumbs/303/cocacola-head-office.jpeg?auto=webp" alt="Slide 2" />
        </div>
        <div>
          <img src="https://cocacolaunited-old.s3.amazonaws.com/wp-content/uploads/2013/06/Milledgeville-100-Year.jpg" alt="Slide 3" />
        </div>
      </Carousel>
    </div>


    </>
  );
};

export default About;
