function Mover(x, y, d) {
  this.loc = new JSVector(x, y);
  this.d = d;

  Mover.prototype.run = function () {
    this.render();
  };

  Mover.prototype.render = function () {
    context.beginPath(); // clear old path
    context.arc(this.loc.x, this.loc.y, this.d, 0, 2 * Math.PI); //  change x and y to this.loc.x and this.loc.y
    context.strokeStyle = "black"; // color to fill
    context.fillStyle = this.clr; // color to stroke
    context.fill(); // render the fill
    context.stroke(); // render the stroke
  };
}
