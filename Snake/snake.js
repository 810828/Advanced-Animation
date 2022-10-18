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
    this.segments[i] = new JSVector(
      Math.cos(Math.PI / 6) * this.segLength + this.loc.x,
      Math.sin(Math.PI / 6) * this.segLength + this.loc.y
    );
  }
};

Snake.prototype.run = function () {
  this.update();
  this.render();
};

Snake.prototype.update = function () {
  this.loc.add(this.vel);
  for (let i = 0; i < this.segLength; i++) {
    // let diff = JSVector.subGetNew(this.loc, this.segments[i]);
    // let angle = diff.getDirection();
    // this.segments[i].setDirection(angle);
    // this.segments[i].setMagnitude(this.segLength);
    // // this.segments[i].multiply(10);
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
    // console.log(this.segments[i].x);
    world.ctx.save();
    world.ctx.beginPath();
    world.ctx.arc(this.segments[i].x, this.segments[i].y, 15, 0, 2 * Math.PI);
    world.ctx.strokeStyle = "black";
    world.ctx.fill();
    world.ctx.stroke();
    world.ctx.restore();
  }
};
