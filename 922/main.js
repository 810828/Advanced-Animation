// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy;
var planet = [];
var p_number = 3;

function init() {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  canvas = document.getElementById("cnv");
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  context = canvas.getContext("2d");
  x = y = 100; // initial x,y canvas location
  dx = dy = 2; // velocity in x and y directions
  for (let i = 0; i < p_number; i++) {
    planet[i] = new Planet(100, 100, 10);
  }
  animate(); // kick off the animation
}

// every animation cycle
function animate() {
  // erase the HTMLCanvasElement
  context.clearRect(0, 0, canvas.width, canvas.height);
  update(); // update location
  draw(); // render
  for (let i = 0; i < planet.length; i++) {
    planet[i].run();
  }
  // planet.run();
  requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
  x += dx; // update x coordinate of location with x velocity
  y += dy; // update y coordinate of location with y velocity
}

// render a circle
function draw() {
  // let radius = 15; // local variable radius of the circle
  // // create the circle path
  // context.beginPath(); // clear old path
  // // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
  // context.arc(x, y, radius, 0, 2 * Math.PI);
  // context.strokeStyle = "black"; // color to fill
  // context.fillStyle = "blue"; // color to stroke
  // context.fill(); // render the fill
  // context.stroke(); // render the stroke
}
