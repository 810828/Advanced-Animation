// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);
// global variables
let canvas, context, ship, planet;
canvas = document.getElementById("cnv");
context = canvas.getContext("2d");

function init() {
  animate(); // kick off the animation
}

// every animation cycle
function animate() {
  // erase the HTMLCanvasElement
  context.clearRect(0, 0, canvas.width, canvas.height);
  planet.run();
  ship.run();
  requestAnimationFrame(animate); // next cycle
}
//!+++++++++++++++++++++++++++++++++++  planet
planet = {};

planet.loc = new JSVector(canvas.width / 2, canvas.height / 2);
planet.vel = new JSVector(0, 0);
planet.acc = new JSVector(0, 0);
planet.d = 20;

planet.run = function () {
  planet.render();
  planet.update();
};

planet.render = function () {
  context.beginPath(); // clear old path
  context.arc(this.loc.x, this.loc.y, this.d, 0, 2 * Math.PI); //  change x and y to this.loc.x and this.loc.y
  context.strokeStyle = "black"; // color to fill
  context.fillStyle = "red"; // color to stroke
  context.fill(); // render the fill
  context.stroke(); // render the stroke
};
//!+++++++++++++++++++++++++++++++++ end of planet

planet.update = function () {
  this.vel.add(this.acc);
  this.loc.add(this.vel);
};

//?+++++++++++++++++++++++++++++++++++   ship
ship = {};

ship.loc = new JSVector(100, 100);
ship.vel = new JSVector(0, 0);
ship.acc = new JSVector(0, 0);

ship.run = function () {
  ship.render();
  ship.update();
};
ship.render = function () {
  context.beginPath();
  context.moveTo(ship.loc.x, ship.loc.y);
  context.lineTo(ship.loc.x, ship.loc.y + 20);
  context.stroke();
  //   context.beginPath();
};
ship.update = function () {};
//?+++++++++++++++++++++++++++++++++++ end of ship
