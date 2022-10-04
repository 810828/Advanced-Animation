function Orbitter(x, y, d) {
  this.vel = new JSVector(0, 0);
  this.d = d;
  this.angle = 0;
  this.angleVelocity = 0.1;
}

Orbitter.prototype.run = function (x, y) {
  this.render(x, y);
  this.update();
};

Orbitter.prototype.render = function (x, y) {
  this.p_loc = new JSVector(x, y);
  this.loc = new JSVector(x, y);
  this.angle += this.angleVelocity;

  // create the circle path
  context.save();
  context.beginPath(); // clear old path
  context.translate(this.p_loc.x, this.p_loc.y);
  context.rotate(this.angle);
  context.arc(0 + 20, 0, this.d, 0, 2 * Math.PI);
  context.strokeStyle = "black"; // color to fill
  context.fillStyle = "blue"; // color to stroke
  context.fill(); // render the fill

  context.restore();

  context.lineTo(this.loc.x, this.loc.y);
  context.lineTo(this.p_loc.x, this.p_loc.y);
  context.stroke(); // render the stroke
};

Orbitter.prototype.update = function () {
  // this.acc = new JSVector.subGetNew(this.p_loc, this.loc);
  // this.acc.normalize();
  // this.acc.multiply(0.1);
  // this.vel.add(this.acc);
  this.loc.add(this.vel);
};
