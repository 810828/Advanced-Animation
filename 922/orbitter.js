function Orbitter(x, y, d) {
  this.vel = new JSVector(0, 0);
  this.d = d;
  this.orbRad = 50;
}

Orbitter.prototype.run = function (x, y) {
  this.render(x, y);
  this.update();
};

Orbitter.prototype.render = function (x, y) {
  this.p_loc = new JSVector(x, y);
  this.loc = new JSVector(x, y);

  // create the circle path
  context.save();
  context.beginPath(); // clear old path
  context.translate(this.p_loc.x, this.p_loc.y);
  context.rotate(20);
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
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
  this.loc.add(this.vel);
};
