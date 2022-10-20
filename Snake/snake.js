// Snake constructor

function Snake(location, numSegs, segLength) {
  //  number of segments, segment length
  this.loc = location;
  this.numSegs = numSegs;
  this.segLength = segLength;
  this.diff;
  this.diam;
  this.segments = [];
  this.vel = new JSVector(Math.random() * 5 - 5, Math.random() * 5 - 5);

  this.loadSegments();
}

Snake.prototype.loadSegments = function () {
  for (let i = 1; i < this.numSegs; i++) {
    let angle = this.vel.getDirection();
    this.segments[i] = new JSVector(
      Math.cos(angle + Math.PI) * this.segLength * (i + 1) + this.loc.x,
      Math.sin(angle + Math.PI) * this.segLength * (i + 1) + this.loc.y
    );
  }
};

Snake.prototype.run = function () {
  this.render();
  this.update();
  this.checkSides();
};

Snake.prototype.update = function () {
  this.loc.add(this.vel);
  this.segments[0] = this.loc;
  for (let i = 1; i < this.numSegs; i++) {
    this.diff = JSVector.subGetNew(this.segments[i], this.segments[i - 1]);
    this.diff.setMagnitude(this.segLength);
    this.diff.add(this.segments[i - 1]);
    this.segments[i] = this.diff;

    // world.ctx.save();
    // world.ctx.beginPath();
    // world.ctx.moveTo(this.segments[i - 1].x, this.segments[i - 1].y);
    // world.ctx.lineTo(this.segments[i].x, this.segments[i].y);
    // world.ctx.strokeStyle = "black";
    // world.ctx.fill();
    // world.ctx.stroke();
    // world.ctx.restore();
  }
};

Snake.prototype.render = function () {
  world.ctx.save();
  world.ctx.beginPath();
  world.ctx.arc(this.loc.x, this.loc.y, 15, 0, 2 * Math.PI);
  // world.ctx.strokeStyle = "black";
  world.ctx.fillStyle = "blue"; // color to stroke
  world.ctx.fill();
  world.ctx.stroke();
  world.ctx.restore();

  for (let i = 1; i < this.numSegs; i++) {
    if (i <= 14) {
      this.diam = 15;
    }
    world.ctx.save();
    world.ctx.beginPath();
    world.ctx.arc(
      this.segments[i].x,
      this.segments[i].y,
      this.diam,
      0,
      2 * Math.PI
    );
    // world.ctx.strokeStyle = "blue";
    world.ctx.fillStyle = "blue"; // color to stroke
    world.ctx.fill();
    // world.ctx.stroke();
    world.ctx.restore();
  }

  Snake.prototype.checkSides = function () {
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
    if (this.loc.y > canvas.height) this.vel.y = -this.vel.y;
  };
};
