// A Snake Example
function World() {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  for (let i = 0; i < numSnakes; i++) {
    let loc = new JSVector(
      Math.random() * this.canvas.width,
      Math.random() * this.canvas.height
    );
    snakes[i] = new Snake(loc, 10, 20);
  }
}

World.prototype.run = function () {
  for (let i = 0; i < numSnakes; i++) {
    snakes[i].run();
  }
};
