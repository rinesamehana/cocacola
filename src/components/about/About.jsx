import React from "react";
import "./about.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      
      <div className="section">
        <div className="text-box">
          <h2>Our purpose is to refresh the world and make a difference</h2>
          <p>
            We are committed to offering people more of the drinks they want
            across a range of categories and and sizes while driving sustainable
            solutions that build resilience into our business and create
            positive change for the planet..
          </p>
        </div>
        <div className="slider-box">
          <Carousel
            autoPlay
            interval={2000}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
          >
            <div>
              <img
                src="https://www.coca-colacompany.com/content/dam/journey/au/en/our-company/Our%20Company%20Module%20Suggestion.png"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                src="https://cdn.trendhunterstatic.com/thumbs/303/cocacola-head-office.jpeg?auto=webp"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                src="https://cocacolaunited-old.s3.amazonaws.com/wp-content/uploads/2013/06/Milledgeville-100-Year.jpg"
                alt="Slide 3"
              />
            </div>
          </Carousel>
        </div>
      </div>
      
      <div class="cover-section">
        <img src="https://cdn.cookielaw.org/logos/e3ab7adf-beb9-4769-844e-c1ec4e6d17bb/9179bc3a-b9bb-4e2c-8b1b-35a6834b2321/fb612f13-b95e-41b2-aaf9-eacdb72ddc38/coke-cookies-logo-preference-centre.png" alt="Cover Image" />
      </div>
    </>
  );
};

export default About;
