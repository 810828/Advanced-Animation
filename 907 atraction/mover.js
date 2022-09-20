function Mover(x, y, d) {
  this.loc = new JSVector(x, y);
  this.d = d;
  let dx = Math.random() * 4 - 3;
  let dy = Math.random() * 4 - 3;
  this.vel = new JSVector(dx, dy); // add a velocity vector

  Mover.prototype.run = function () {
    this.render();
    this.update();
    this.bounce();
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

  Mover.prototype.bounce = function () {
    if (this.loc.x >= canvas.width) this.vel.x = -this.vel.x;
    if (this.loc.x <= 0) this.vel.x = -this.vel.x;
    if (this.loc.y >= canvas.height) this.vel.y = -this.vel.y;
    if (this.loc.y <= 0) this.vel.y = -this.vel.y;
  };
}
