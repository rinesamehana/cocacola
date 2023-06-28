import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const Ades = () => {
  const pixiCanvasRef = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      background: '#E7DDC2',
      resizeTo: window,
      view: pixiCanvasRef.current,
    });

 
    const adesdrink = PIXI.Sprite.from('../../images/ades-removebg-preview.png');

    
    adesdrink.anchor.set(0.5);

    
    adesdrink.x = app.screen.width / 2;
    adesdrink.y = app.screen.height / 2;

   
    adesdrink.scale.set(1.2);

    app.stage.addChild(adesdrink);


    app.ticker.add(() => {
     
      adesdrink.scale.x *= -1;
    });
  }, []);

  return <canvas ref={pixiCanvasRef}></canvas>;
};

export default Ades;
