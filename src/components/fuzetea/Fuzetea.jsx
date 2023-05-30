import React, { useEffect, useRef } from "react";
import "./fuzetea.css";

const Fuzetea = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const playAudio = () => {
      audioElement.play();
    };

    // Play audio automatically when the component mounts
    playAudio();

    // Clean up function
    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []);

  return (
    <>
   

      <div className="fuzetea-container" transition-style="in:circle:top-right">

      <div class="container">
        <h2 class="title">
          <span class="title-word title-word-1">OUR</span> 
          <span class="title-word title-word-2">BELOVED</span>
          <span class="title-word title-word-3">FUZE</span>
          <span class="title-word title-word-4">TEA</span>
        </h2>
      </div>

        <div className="fuzetea-bubble">
          <img
            src="../../images/fuzetea.png"
            alt="Fuzetea Logo"
            className="fuzetea-logo"
          />
        </div>
        <audio ref={audioRef} src="../../sounds/fuzetea.wav" autoPlay />


       
      </div>
    </>
  );
};

export default Fuzetea;
