function Mover(x, y, d) {
  this.loc = new JSVector(x, y);
  let dx = Math.random() * 4 - 3;
  let dy = Math.random() * 4 - 3;
  // this.vel = new JSVector(dx, dy); // add a velocity vector  this.d = d;

  Mover.prototype.run = function () {
    this.render();
    this.update();
  };

  Mover.prototype.render = function () {
    context.beginPath(); // clear old path
    context.arc(this.loc.x, this.loc.y, this.d, 0, 2 * Math.PI); //  change x and y to this.loc.x and this.loc.y
    context.strokeStyle = "black"; // color to fill
    context.fillStyle = this.clr; // color to stroke
    context.fill(); // render the fill
    context.stroke(); // render the stroke
  };

  Mover.prototype.update = function () {
    this.loc.add(this.vel);
  };
}
