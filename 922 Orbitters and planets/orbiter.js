function Orbiter(planet, oR, inAgle, angleV) {
  this.vel = new JSVector(0, 0);
  this.orbRad = oR;
  this.planet = planet;
  this.d = 10;
  this.inAgle = inAgle;
  this.angleVelocity = angleV;
}

Orbiter.prototype.run = function (x, y) {
  this.render(x, y);
  this.update();
};

Orbiter.prototype.render = function (x, y) {
  this.p_loc = new JSVector(0, 0);
  this.loc = new JSVector(x, y);
  this.inAgle += this.angleVelocity;

  // create the circle path
  context.save();
  context.beginPath(); // clear old path
  context.translate(this.p_loc.x, this.p_loc.y);
  context.rotate(this.inAgle);
  context.arc(0 + this.orbRad, 0, this.d, 0, 2 * Math.PI);
  context.strokeStyle = "black"; // color to fill
  context.fillStyle = "blue"; // color to stroke
  context.fill(); // render the fill

  context.moveTo(0, 0);
  context.lineTo(this.loc.x + this.orbRad, this.loc.y);
  context.restore();
  context.stroke(); // render the stroke
};

Orbiter.prototype.update = function () {
  // this.acc = new JSVector.subGetNew(this.p_loc, this.loc);
  // this.acc.normalize();
  // this.acc.multiply(0.1);
  // this.vel.add(this.acc);
  this.loc.add(this.vel);
};
