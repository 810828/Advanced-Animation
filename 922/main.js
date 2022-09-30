// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy;
var planet = [];
var p_number = 3;

function init() {
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");
  for (let i = 0; i < p_number; i++) {
    planet[i] = new Planet(Math.random() * 500, Math.random() * 500, 10);
  }
  animate(); // kick off the animation
}

// every animation cycle
function animate() {
  // erase the HTMLCanvasElement
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < planet.length; i++) {
    planet[i].run();
  }
  requestAnimationFrame(animate); // next cycle
}
