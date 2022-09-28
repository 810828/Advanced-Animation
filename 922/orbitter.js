function Orbitter(x, y, d) {
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(0, 0);
  this.d = d;
}

Orbitter.prototype.run = function () {
  this.render();
  this.update();
};

Orbitter.prototype.render = function () {
  for (let i = 0; i < p_number; i++) {
    // create the circle path
    context.beginPath(); // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(planet[i].loc.x, planet[i].loc.y, this.d, 0, 2 * Math.PI);
    context.strokeStyle = "black"; // color to fill
    context.fillStyle = "blue"; // color to stroke
    context.fill(); // render the fill

    context.lineTo(planet[i].loc.x, planet[i].loc.y);
    context.lineTo(planet[i].loc.x, planet[i].loc.y);

    context.stroke(); // render the stroke
  }
};

Orbitter.prototype.update = function () {
  this.loc.add(this.vel);
};
