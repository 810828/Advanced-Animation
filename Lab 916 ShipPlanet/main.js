
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);
// global variables
let canvas, context, ship, planet;
canvas = document.getElementById("cnv");
context = canvas.getContext("2d");

function init(){
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate); // next cycle
}
//+++++++++++++++++++++++++++++++++++  planet

planet = {}

planet.loc = new JSVector(canvas.width/2, canvas.height/2);
planet.vel = new JSVector(0,0);
planet.acc = new JSVector(0,0);

//+++++++++++++++++++++++++++++++++++   ship
ship = {}

ship.loc = new JSVector(100, 100);
ship.vel = new JSVector(0,0);
ship.acc = new JSVector(0,0);

ship.update = function(){

}

