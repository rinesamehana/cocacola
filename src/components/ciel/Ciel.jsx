import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const Ciel = () => {
  const pixiCanvasRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    appRef.current = new PIXI.Application({ background: '#1099bb', resizeTo: window });
    const app = appRef.current;

    const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');
    texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

    for (let i = 0; i < 10; i++) {
      createBunny(
        Math.floor(Math.random() * app.screen.width),
        Math.floor(Math.random() * app.screen.height)
      );
    }

    function createBunny(x, y) {
      const bunny = new PIXI.Sprite(texture);
      bunny.interactive = true;
      bunny.cursor = 'pointer';
      bunny.anchor.set(0.5);
      bunny.scale.set(3);
      bunny.on('pointerdown', onDragStart, bunny);
      bunny.x = x;
      bunny.y = y;
      app.stage.addChild(bunny);
    }

    let dragTarget = null;

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;
    app.stage.on('pointerup', onDragEnd);
    app.stage.on('pointerupoutside', onDragEnd);

    function onDragMove(event) {
      if (dragTarget) {
        dragTarget.parent.toLocal(event.global, null, dragTarget.position);
      }
    }

    function onDragStart() {
      this.alpha = 0.5;
      dragTarget = this;
      app.stage.on('pointermove', onDragMove);
    }

    function onDragEnd() {
      if (dragTarget) {
        app.stage.off('pointermove', onDragMove);
        dragTarget.alpha = 1;
        dragTarget = null;
      }
    }

    pixiCanvasRef.current.appendChild(app.view);

    return () => {
     
      app.destroy(true);
    };
  }, []);

  return <div ref={pixiCanvasRef}></div>;
};

export default Ciel;
