// Snake constructor

function Snake(location, numSegs, segLength) {
  //  number of segments, segment length
  this.loc = location;
  this.numSegs = numSegs;
  this.segLength = segLength;
  this.segments = [];
  this.loadSegments();
  this.vel = new JSVector(Math.random() * 4 - 3, Math.random() * 4 - 3);
}

Snake.prototype.loadSegments = function () {
  for (let i = 1; i < this.segLength; i++) {
    this.segments[i] = new JSVector(this.loc.x, this.loc.y);
  }
};

Snake.prototype.run = function () {
  this.render();
  this.update();
  this.checkSides();
};

Snake.prototype.update = function () {
  this.loc.add(this.vel);
  for (let i = 1; i < this.segLength; i++) {
    let diff = JSVector.subGetNew(this.loc, this.segments[i]);
    let angle = diff.getDirection();
    this.segments[i].setDirection(angle);
    this.segments[i].x = Math.cos(angle) * this.segLength + this.loc.x;
    this.segments[i].y = Math.sin(angle) * this.segLength + this.loc.y;

    world.ctx.save();
    world.ctx.beginPath();
    world.ctx.moveTo(this.loc.x, this.loc.y);
    world.ctx.lineTo(this.segments[i].x, this.segments[i].y);
    world.ctx.strokeStyle = "black";
    world.ctx.fill();
    world.ctx.stroke();
    world.ctx.restore();
  }
};

Snake.prototype.render = function () {
  world.ctx.save();
  world.ctx.beginPath();
  world.ctx.arc(this.loc.x, this.loc.y, 15, 0, 2 * Math.PI);
  world.ctx.strokeStyle = "black";
  world.ctx.fill();
  world.ctx.stroke();
  world.ctx.restore();

  for (let i = 1; i < this.segLength; i++) {
    world.ctx.save();
    world.ctx.beginPath();
    world.ctx.arc(this.segments[i].x, this.segments[i].y, 15, 0, 2 * Math.PI);
    world.ctx.strokeStyle = "blue";
    world.ctx.fill();
    world.ctx.stroke();
    world.ctx.restore();
  }

  Snake.prototype.checkSides = function () {
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
    if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
  };
};
