import React from "react";
import "./sprite.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Sprite = () => {
  return (
    <>
      <div className="video-section">
        <video autoPlay loop className="video">
          <source src="../../../videos/sprite.mp4" type="video/mp4" />
        </video>
      </div>

      <section>
        <div className="main">
          <div className="text">
            <h1>
              THAT'S WHAT<span>I LIKE</span>
            </h1>
            <p>
              Sprite is a clear, lemon and lime-flavored soft drink created by
              the Coca-Cola Company. Sprite comes in multiple flavors, including
              cranberry, cherry, grape, orange, tropical, ginger, and vanilla.
              Ice, peach, Berryclear remix, and newer versions of the drinks are
              artificially sweetened. Sprite was created to compete primarily
              against 7 Up.
            </p>

            <div className="bounce-in-back">
              <a href="#" className="btn">
                COCA COLA BRAND
              </a>
            </div>
          </div>

          <div className="image">
            <img src="../../../images/5.png" alt="Sprite" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sprite;