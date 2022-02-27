
export const draw = (ctx: CanvasRenderingContext2D | null, frameCount: number, rad: number) => {
  ctx!.clearRect(0, 0, ctx!.canvas.width, ctx!.canvas.height);

  for (let i = 0; i < rad; i++) {
    ctx!.fillStyle = generateColor();
    ctx!.beginPath()
    ctx!.arc(ctx!.canvas.width * Math.random(), ctx!.canvas.height * Math.random(), 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx!.fill();
  }
}

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
