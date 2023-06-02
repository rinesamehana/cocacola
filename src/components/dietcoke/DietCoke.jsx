import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import './dietcoke.css'; // Import the CSS file for styling

const DietCoke = () => {
  useEffect(() => {
    const app = new PIXI.Application({ backgroundAlpha: 0 });
    document.body.appendChild(app.view);

    const bunny = PIXI.Sprite.from('https://images.albertsons-media.com/is/image/ABS/960026405?$ng-ecom-pdp-desktop$&defaultImage=Not_Available');
    bunny.anchor.set(0.5);
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    const rotationSpeed = 0.05; // Adjust the speed of rotation (higher value = faster)

    app.stage.addChild(bunny);

    app.ticker.add(() => {
      bunny.rotation += rotationSpeed;
    });

    return () => {
      app.destroy();
    };
  }, []);



  return (
    <div className="diet-coke-container">
      <h1>D</h1>
    </div>
  );
};

export default DietCoke;
