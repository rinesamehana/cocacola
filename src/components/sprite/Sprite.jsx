import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sprite.css";

const Sprite = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className="video-section">
        <video autoPlay loop className="video">
          <source src="../../../videos/sprite.mp4" type="video/mp4" />
        </video>
      </div>

      <section>
        <div className="main">
          <div className="text" data-aos="fade-up">
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

            <a href="#" className="btn">
              COCA COLA BRAND
            </a>
          </div>

          <div className="image" data-aos="roll-in">
            <img src="../../../images/5.png" alt="Sprite" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sprite;
