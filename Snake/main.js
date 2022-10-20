let world; // a single global object
let snakes = [];
let numSnakes = 1;

window.onload = init; //  After the window has been loaded, go to init
function init() {
  world = new World(); // global world
  animate(); // kick off the animation
}

//  animation loop called 60 fps
function animate() {
  world.ctx.fillStyle = "white";
  world.ctx.globalAlpha = 0.2;
  world.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  world.run(); // run the world
  requestAnimationFrame(animate);
}
