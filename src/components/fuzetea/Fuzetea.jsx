import React, { useEffect, useRef } from 'react';
import './fuzetea.css';

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
    <div className="fuzetea-container" transition-style="in:circle:top-right">
      <div className="fuzetea-bubble">
        <img src="../../images/fuzetea.png" alt="Fuzetea Logo" className="fuzetea-logo" />
      </div>
      <audio ref={audioRef} src="../../sounds/fuzetea.wav" autoPlay />
      <h1>Welcome to Fuzetea!</h1>
      {/* Other attractive content */}
    </div>
  );
};

export default Fuzetea;
