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

    const adesDrink = PIXI.Sprite.from('../../images/ades-removebg-preview.png');
    adesDrink.anchor.set(0.5);
    adesDrink.x = app.screen.width / 2;
    adesDrink.y = app.screen.height / 2;
    adesDrink.scale.set(1.2);

    app.stage.addChild(adesDrink);

    let angle = 0;
    app.ticker.add((delta) => {
      angle += 0.1 * delta; 
      adesDrink.rotation = Math.sin(angle) * 0.1; 
    });
  }, []);

  return <canvas ref={pixiCanvasRef}></canvas>;
};

export default Ades;
