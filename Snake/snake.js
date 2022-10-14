// Snake constructor

function Snake(location, numSegs, segLength) {
  //  number of segments, segment length
  this.loc = location;
  this.numSegs = numSegs;
  this.segLength = segLength;
  this.segments = [];
  this.loadSegments();
  this.vel = new JSVector(0, 0);
}

Snake.prototype.loadSegments = function () {
  let ploc = new JSVector(this.loc.x, this.loc.y);
  for (let i = 0; i < this.segLength; i++) {
    this.segments[i] = new JSVector(
      ploc + this.vel.setMagnitude(this.segLength)
    );
    ploc.x = this.segments[i].x;
    ploc.y = this.segments[i].y;
  }
};

Snake.prototype.run = function () {
  this.update();
  this.render();
};

Snake.prototype.update = function () {};

Snake.prototype.render = function () {};
