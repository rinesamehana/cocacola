import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import './dietcoke.css'; 

const DietCoke = () => {
  useEffect(() => {
    const app = new PIXI.Application({ backgroundAlpha: 0 });
    document.body.appendChild(app.view);

    const coke = PIXI.Sprite.from('https://images.albertsons-media.com/is/image/ABS/960026405?$ng-ecom-pdp-desktop$&defaultImage=Not_Available');
    coke.anchor.set(0.5);
    coke.x = app.screen.width / 2;
    coke.y = app.screen.height / 2;

    const rotationSpeed = 0.008; 

    app.stage.addChild(coke);

    app.ticker.add(() => {
      coke.rotation += rotationSpeed;
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
