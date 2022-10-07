function Mover() {
  //mover properties
  this.loc = new JSVector(100, 100);
  this.vel = new JSVector(Math.random() * 4 - 4, Math.random() * 4 - 4);
  this.diam = 15;
} //++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ mover methods
Mover.prototype.run = function () {
  this.update();
  this.checkEdges();
  this.render();
};

Mover.prototype.update = function () {
  this.loc.add(this.vel);
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
  ctxMain.strokeStyle = "black"; // color to fill
  ctxMain.fill();
  ctxMain.stroke();
  ctxMain.restore();

  //  render balls in world
  //  render balls in mini map
};
