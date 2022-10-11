//Lab 930: World bigger than Canvas
//Sept. 29, 2022

//Global
let world;
window.addEventListener("load", init);
function init() {
  world = new World();
  animate();
}

function animate() {
  world.run();
  requestAnimationFrame(animate);
}
