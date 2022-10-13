function Mover(x, y) {
  //mover properties
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(
    Math.random() * (2 - -2) + -2,
    Math.random() * (2 - -2) + -2
  );
  this.diam = 15;
  this.isDead = false;
  this.lifespan = 150;
  this.lifespan = Math.random() * (200 - 100) + 100;
  this.count = 0;
  this.kidCount = 0;
  this.maxMovers = 500;
} //++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  this.update();
  this.checkEdges();
  this.render();
};

Mover.prototype.update = function () {
  this.loc.add(this.vel);
  if (--this.lifespan <= 0) {
    this.isDead = true;
  }
  if (
    ++this.count > Math.random() * (200 - 60) + 60 &&
    world.movers.length < this.maxMovers
  ) {
    // adds a new mover when the count reachers the random number and when there are less then the maxMovers
    world.movers.push(new Mover(this.loc.x, this.loc.y));
    this.kidCount++;
    this.count = 0;
  }
  if (this.kidCount >= 2) {
    this.isDead = true;
  }
};

Mover.prototype.checkEdges = function () {
  if (this.loc.x + 10 > world.dims.right) this.vel.x = -this.vel.x;
  if (this.loc.x - 10 < world.dims.left) this.vel.x = -this.vel.x;
  if (this.loc.y - 10 < world.dims.top) this.vel.y = -this.vel.y;
  if (this.loc.y + 10 > world.dims.bottom) this.vel.y = -this.vel.y;
};

Mover.prototype.render = function () {
  let ctxMain = world.ctxMain;
  ctxMain.save();
  ctxMain.beginPath();
  ctxMain.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI);
  ctxMain.strokeStyle = "black";
  ctxMain.fill();
  ctxMain.stroke();
  ctxMain.restore();

  //  render balls in world
  //  render balls in mini map
};
