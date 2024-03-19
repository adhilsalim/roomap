const mainCanvas = document.getElementById("main-canvas");

let canvasData = {
  canvasHeight: 500,
  canvasWidth: 1000,
  backgroundColor: "#000000",

  canvasDraw: [
    {
      x: 105,
      y: 100,
      width: 100,
      height: 200,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#FA7070",
    },
    {
      x: 205,
      y: 100,
      width: 300,
      height: 100,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#FA7070",
    },
    {
      x: 205,
      y: 200,
      width: 150,
      height: 100,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#FA7070",
    },
    {
      x: 355,
      y: 200,
      width: 150,
      height: 100,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#FA7070",
    },
  ],
};

function paintCanvas(height, width, backgroundColor, canvasDraw) {
  height ? (canvasData.canvasHeight = height) : canvasData.canvasHeight;
  width ? (canvasData.canvasWidth = width) : canvasData.canvasWidth;
  backgroundColor
    ? (canvasData.backgroundColor = backgroundColor)
    : canvasData.backgroundColor;
  canvasDraw ? (canvasData.canvasDraw = canvasDraw) : canvasData.canvasDraw;

  if (mainCanvas.getContext) {
    const ctx = mainCanvas.getContext("2d");
    mainCanvas.width = canvasData.canvasWidth;
    mainCanvas.height = canvasData.canvasHeight;
    ctx.fillStyle = canvasData.backgroundColor;
    ctx.fillRect(0, 0, canvasData.canvasWidth, canvasData.canvasHeight);

    canvasData.canvasDraw.forEach((element) => {
      ctx.beginPath();
      ctx.lineWidth = element.penSize;
      ctx.strokeStyle = element.penColor;
      ctx.fillStyle = element.fillColor;
      ctx.rect(element.x, element.y, element.width, element.height);
      ctx.stroke();
      ctx.fill();
    });
  }
}

paintCanvas();

function updateCanvasDraw(data) {
  canvasData.canvasDraw = data;
  paintCanvas();
}

setInterval(() => {
  updateCanvasDraw([
    {
      x: 105,
      y: 100,
      width: 100,
      height: 200,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#FA7070",
    },
    {
      x: 205,
      y: 100,
      width: 300,
      height: 100,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#A5DD9B",
    },
    {
      x: 205,
      y: 200,
      width: 150,
      height: 100,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#FA7070",
    },
    {
      x: 355,
      y: 200,
      width: 150,
      height: 100,
      penColor: "#FEFDED",
      penSize: 5,
      fillColor: "#A5DD9B",
    },
  ]);
}, 5000);
