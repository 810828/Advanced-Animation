function Planet(x, y, d) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(1, 0);
  this.d = d;
  this.orb = [];
  this.o_number = 1;

  for (let i = 0; i < this.o_number; i++) {
    // loads a new orbitter
    this.orb[i] = new Orbitter(this.loc.x, this.loc.y, 5);
  }
}

Planet.prototype.run = function () {
  this.render();
  this.update();
  this.makeOrbitters();
  this.checkEdges();
};

Planet.prototype.render = function () {
  context.beginPath();
  context.lineTo(this.loc.x, this.loc.y - 15);
  context.lineTo(this.loc.x + 10, this.loc.y + 10);

  context.lineTo(this.loc.x, this.loc.y - 15);
  context.lineTo(this.loc.x - 10, this.loc.y + 10);

  context.lineTo(this.loc.x - 10, this.loc.y + 10);
  context.lineTo(this.loc.x + 10, this.loc.y + 10);
  context.stroke();

  //   context.closePath();
};

Planet.prototype.update = function () {
  this.loc.add(this.vel);
};

Planet.prototype.makeOrbitters = function () {
  for (let i = 0; i < this.orb.length; i++) {
    this.orb[i].run(this.loc.x, this.loc.y);
  }
};

Planet.prototype.checkEdges = function () {
  if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
  if (this.loc.x < 0) this.vel.x = -this.vel.x;
  if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
  if (this.loc.y < 0) this.vel.y = -this.vel.y;
};
