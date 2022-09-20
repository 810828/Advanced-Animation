function Ball(x, y, d) {
  this.loc = new JSVector(x, y); //  add a location vector
  let dx = Math.random() * 4 - 3;
  let dy = Math.random() * 4 - 3;

  this.vel = new JSVector(dx, dy); // add a velocity vector
  this.acc = new JSVector(0, 0); //  add an acceleration vector
  this.diam = d;

  //  choose a random color from this array
  this.clrArray = [
    "#2255AA",
    "FF0022",
    "Chocolate",
    "FireBrick",
    "GreenYellow",
    "LightSeaGreen",
    "Teal",
  ];
  this.clrIndex = Math.floor(Math.random() * this.clrArray.length);
  this.clr = this.clrArray[this.clrIndex];
}

Ball.prototype.run = function () {
  this.render();
  this.update();
  this.bounce();
  this.fix();
};

Ball.prototype.render = function () {
  context.beginPath(); // clear old path
  context.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI); //  change x and y to this.loc.x and this.loc.y
  context.strokeStyle = "black"; // color to fill
  context.fillStyle = this.clr; // color to stroke
  context.fill(); // render the fill
  context.stroke(); // render the stroke
};

Ball.prototype.update = function () {
  this.acc = JSVector.subGetNew(mover.loc, this.loc);
  this.acc.normalize();
  this.acc.multiply(0.25);
  this.vel.add(this.acc);

  this.loc.add(this.vel);
  console.log();
};

Ball.prototype.bounce = function () {
  if (this.loc.x >= canvas.width) this.vel.x = -this.vel.x;
  if (this.loc.x <= 0) this.vel.x = -this.vel.x;
  if (this.loc.y >= canvas.height) this.vel.y = -this.vel.y;
  if (this.loc.y <= 0) this.vel.y = -this.vel.y;
};

Ball.prototype.fix = function () {
  if (this.loc.y >= canvas.height + 5) this.loc.y = canvas.height - 10;
};
