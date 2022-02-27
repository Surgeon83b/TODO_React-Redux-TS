import React, { useState, useEffect, useRef } from "react";

export const MyCanvas: React.FC<{ draw: (ctx: CanvasRenderingContext2D | null, frameCount: number, rad: number) => void, anim: string }> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rad, setRad] = useState(5);
  const { draw, ...rest } = props;

  const changeRad = (radius: number) => {
    setRad(radius);
  }

  useEffect(() => {

    const canvas = canvasRef.current;
    const context: CanvasRenderingContext2D | null = canvas!.getContext('2d');
    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount++;
      draw(context, frameCount, rad);
      animationFrameId = window.requestAnimationFrame(render);
    }

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw, rad])

  return (
    <>
    {(rest.anim==="active") && <canvas ref={canvasRef} style={{ width: "350px" }} onClick={() => changeRad(25 * Math.random())} {...rest}></canvas>}
    </>
  )
}
