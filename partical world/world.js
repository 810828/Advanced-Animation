function World() {
  this.cnvMain = document.getElementById("cnv1");
  this.ctxMain = this.cnvMain.getContext("2d");
  this.cnvMini = document.getElementById("cnv2");
  this.ctxMini = this.cnvMini.getContext("2d");
  //  vector to locate canvas in the world
  this.dims = {
    top: -1500,
    left: -2000,
    bottom: 1500,
    right: 2000,
    width: 4000,
    height: 3000,
  };
  this.miniDims = {
    top: this.dims.top * 0.1,
    left: this.dims.left * 0.1,
    bottom: this.dims.bottom * 0.1,
    right: this.dims.right * 0.1,
    width: this.dims.width * 0.1,
    height: this.dims.height * 0.1,
  };

  this.movers = [];
  this.loadMovers(10);
  // scale factor 1/10

  //Step 1::reduce world to fit inside of mini Canvas
  // this.scaleX = ??;
  // this.scaleY = ??;

  this.cnvMainLoc = new JSVector(0, 0);
  // add an event handler such that the a, s, w, d keys
  // will reposition the canvas within the world.

  window.addEventListener(
    "keypress",
    function (event) {
      switch (event.code) {
        //  What is "this" inside of the listener????????????????????
        case "KeyW":
          if (world.cnvMainLoc.y + 100 > world.dims.top)
            world.cnvMainLoc.y -= 20;
          break;
        case "KeyS":
          if (
            world.cnvMainLoc.y + world.cnvMain.height - 100 <
            world.dims.bottom
          )
            world.cnvMainLoc.y += 20;
          break;
        case "KeyA":
          if (world.cnvMainLoc.x + 100 > world.dims.left)
            world.cnvMainLoc.x -= 20;
          break;
        case "KeyD":
          if (world.cnvMainLoc.x + world.cnvMain.width - 100 < world.dims.right)
            world.cnvMainLoc.x += 20;
          break;
          break;
      }
    },
    false
  );
} //++++++++++++++++++++++++++++++  end world constructor

// run the world in animation
World.prototype.run = function () {
  this.ctxMain.save();
  this.ctxMain.beginPath();
  this.ctxMain.clearRect(
    this.dims.left,
    this.dims.top,
    this.totalWidth,
    this.totalHeight
  );
  this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);

  //! world border
  this.ctxMain.moveTo(this.dims.left, this.dims.top);
  this.ctxMain.lineTo(this.dims.right, this.dims.top);
  this.ctxMain.lineTo(this.dims.right, this.dims.bottom);
  this.ctxMain.lineTo(this.dims.left, this.dims.bottom);
  this.ctxMain.closePath();

  //! end of world border

  this.ctxMain.moveTo(0, this.dims.top); // draw the y axis
  this.ctxMain.lineTo(0, this.dims.bottom); // x = 0
  this.ctxMain.moveTo(this.dims.left, 0);
  this.ctxMain.lineTo(this.dims.right, 0);

  this.ctxMain.strokeStyle = "blue";
  this.ctxMain.stroke();

  //****************************
  this.ctxMini.save();
  this.ctxMini.beginPath();
  this.totalWidth = -this.dims.left + this.dims.right; // gets the total width of the main canvas
  this.totalHeight = -this.dims.top + this.dims.bottom; // gets the total height of the main canvas
  this.ctxMini.clearRect(
    this.dims.left,
    this.dims.top,
    this.totalWidth,
    this.totalHeight
  );
  this.ctxMini.translate(200, 150);
  this.ctxMini.moveTo(0, this.dims.top);
  this.ctxMini.lineTo(0, this.dims.bottom);
  this.ctxMini.moveTo(this.dims.left, 0);
  this.ctxMini.lineTo(this.dims.right, 0);
  this.ctxMini.strokeStyle = "blue";
  this.ctxMini.stroke();

  this.ctxMini.scale(0.1, 0.1);
  this.ctxMini.translate(this.cnvMainLoc.x, this.cnvMainLoc.y);
  this.ctxMini.lineWidth = 20;
  this.ctxMini.moveTo(0, 0);
  this.ctxMini.lineTo(0, 600);
  this.ctxMini.lineTo(800, 600);
  this.ctxMini.lineTo(800, 0);
  this.ctxMini.closePath();
  this.ctxMini.strokeStyle = "black";
  this.ctxMini.stroke();

  // Step Two:  Move cnvMain in the world and run movers  ########################################################
  //  Clear the rectangle in the main Canvas

  //  move the main canvas inside of the world

  //  scale the world to fit into the miniCanvas

  //  center the world inside of the miniCanvas
  // this.ctxMini.translate(500, 500);

  //  run the movers in both canvas

  for (let i = 0; i < this.movers.length; i++) {
    this.movers[i].run();
  }

  //  restore the context
  this.ctxMini.restore();
  this.ctxMain.restore();

  // Step Three:  Draw the mainCanv and axes in the miniCanv ########################################################
  //    scale cnvMini to contain the entire world

  //    center the world in miniCnv

  //    draw x and y axes on miniMap

  //    outline box inside of cnvMini

  //    this.ctxMain.restore();
  //    this.ctxMini.restore();

  this.checkDead();
};

World.prototype.checkDead = function () {
  for (let i = 0; i < this.movers.length; i++) {
    if (this.movers[i].isDead) {
      this.movers.splice(i, 1);
    }
  }
};

//Load mover array
World.prototype.loadMovers = function (n) {
  for (let i = 0; i < n; i++) {
    this.movers[i] = new Mover(100, 500);
  }
};

World.prototype.getRandomColor = function () {
  //  List of hex color values for movers
  let colors = [
    "#7102AB",
    "#ab0256",
    "#0285ab",
    "#02ab1a",
    "#ab5302",
    "#773e26",
    "#ab0256",
    "#257874",
    "#78254e",
    "#787725",
  ];
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
