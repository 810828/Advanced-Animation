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
let p_dx = Math.random() * 4 - 3;
let p_dy = Math.random() * 4 - 3;
planet.vel = new JSVector(p_dx, p_dy);
planet.acc = new JSVector(0, 0);
planet.d = 20;

planet.run = function () {
  planet.render();
  planet.update();
  planet.checkShip();
  planet.checkSides();
};

planet.render = function () {
  // context.save();
  context.beginPath(); // clear old path
  context.arc(this.loc.x, this.loc.y, this.d, 0, 2 * Math.PI); //  change x and y to this.loc.x and this.loc.y
  context.strokeStyle = "black"; // color to fill
  context.fillStyle = "red"; // color to stroke
  context.fill(); // render the fill
  context.stroke(); // render the stroke
  // context.restore();
};

planet.update = function () {
  this.vel.add(this.acc);
  this.vel.limit(5);
  this.loc.add(this.vel);
};
planet.checkShip = function () {
  if (planet.loc.distance(ship.loc) < 100) {
    ship.vel.limit(2);
    planet.vel.add(ship.vel);
    console.log("im here");
  }
};

planet.checkSides = function () {
  if (planet.loc.x > canvas.width) planet.loc.x = 0;
  if (planet.loc.x < 0) planet.loc.x = canvas.width;
  if (planet.loc.y > canvas.height) planet.loc.y = 0;
  if (planet.loc.y < 0) planet.loc.y = canvas.height;
};
//!+++++++++++++++++++++++++++++++++ end of planet

//?+++++++++++++++++++++++++++++++++++   ship
ship = {};

ship.loc = new JSVector(100, 100);
let dx = Math.random() * 4 - 3;
let dy = Math.random() * 4 - 3;
ship.vel = new JSVector(dx, dy);
ship.acc = new JSVector(0, 0);

ship.run = function () {
  ship.render();
  ship.update();
  ship.checkSides();
};
ship.render = function () {
  context.save();
  context.beginPath();
  context.translate(this.loc.x, this.loc.y);
  // context.moveTo(ship.loc.x, ship.loc.y);
  context.lineTo(20, 0);
  context.lineTo(-10, 10);
  context.lineTo(0, -5);
  // context.lineTo(20);
  context.stroke();
  context.closepath();

  context.restore();
};
ship.update = function () {
  ship.acc = new JSVector.subGetNew(planet.loc, ship.loc);
  ship.acc.normalize();
  ship.acc.multiply(0.1);
  ship.vel.add(ship.acc);
  ship.vel.limit(3);
  // ship.loc.add(ship.vel);
};

ship.checkSides = function () {
  if (ship.loc.x > canvas.width) ship.vel.x = -ship.vel.x;
  if (ship.loc.x < 0) ship.vel.x = -ship.vel.x;
  if (ship.loc.y > canvas.height) ship.vel.y = -ship.vel.y;
  if (ship.loc.y < 0) ship.vel.y = -ship.vel.y;
};
//?+++++++++++++++++++++++++++++++++++ end of ship
