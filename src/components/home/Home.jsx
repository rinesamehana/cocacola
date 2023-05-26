import React, { useEffect, useState } from 'react';
import './home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as desired (in milliseconds)

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className={`fade-in-cover ${isVisible ? 'visible' : ''}`}>
      <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/10/coca-cola.jpg?quality=82&strip=1path_to_your_image.jpg" alt="Cover Image" />
    </div>
  );
};

export default Home
