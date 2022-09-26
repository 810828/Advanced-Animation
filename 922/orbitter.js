function Orbitter(x, y, d) {
  this.loc = new JSVector(x, y);
  this.d = d;
}

Orbitter.prototype.run = function () {
  this.render();
  this.update();
};

Orbitter.prototype.render = function () {
  // create the circle path
  context.beginPath(); // clear old path
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
  context.arc(this.loc.x, this.loc.y, this.d, 0, 2 * Math.PI);
  context.strokeStyle = "black"; // color to fill
  context.fillStyle = "blue"; // color to stroke
  context.fill(); // render the fill
  context.stroke(); // render the stroke
};

Orbitter.prototype.update = function () {};
