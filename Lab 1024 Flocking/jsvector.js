// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function (mag) {
  let angle = this.getDirection();
  this.x = mag * Math.cos(angle);
  this.y = mag * Math.sin(angle);
  return this;
};

// Return the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function () {
  mag = Math.sqrt(this.x * this.x + this.y * this.y);
  // dir = Math.atan2(this.y, this.x);
  return mag;
};

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function (angle) {
  let mag = this.getMagnitude();
  this.y = mag * Math.sin(angle);
  this.x = mag * Math.cos(angle);
  return this;
};

// Return the direction (angle) of the vector
JSVector.prototype.getDirection = function () {
  return Math.atan2(this.y, this.x);
};

// Add another vector to this vector
JSVector.prototype.add = function (v2) {
  this.x = this.x + v2.x;
  this.y = this.y + v2.y;
  return this;
};

// Subtract another vector from this vector
JSVector.prototype.sub = function (v2) {
  this.x = this.x - v2.x;
  this.y = this.y - v2.y;
  return this;
};

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function (v1, v2) {
  let v3 = new JSVector(v1.x + v2.x, v1.y + v2.y);
  return v3;
};

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function (v1, v2) {
  let v3 = new JSVector(v1.x - v2.x, v1.y - v2.y);
  return v3;
};

// Multiply this vector by a scalar
JSVector.prototype.multiply = function (scalar) {
  this.x = this.x * scalar;
  this.y = this.y * scalar;
  return this;
};

// Divide this vector by a scalar
JSVector.prototype.divide = function (scalar) {
  this.x = this.x / scalar;
  this.y = this.y / scalar;
  return this;
};

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function () {
  this.setMagnitude(1);
  return this;
};

// Limit the magnitude of this vector
JSVector.prototype.limit = function (lim) {
  if (this.getMagnitude() > lim) {
    this.setMagnitude(lim);
  }
  return this;
};

// Return the distance between this vector and another one
JSVector.prototype.distance = function (v2) {
  let v3 = JSVector.subGetNew(this, v2);
  return v3.getMagnitude();
};

// Return the square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function (v2) {};

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function (angle) {
  let dir = this.getDirection();
  this.setDirection(dir + angle);
  return this;
};

// Return the angle between this vector and another one
JSVector.prototype.angleBetween = function (v2) {
  let dir1 = this.getDirection();
  let dir2 = v2.getDirection();
  let angle = Math.abs(dir1 - dir2);
  return angle;
};

// Return a copy of this vector
JSVector.prototype.copy = function () {
  let v2 = new JSVector(this.x, this.y);
  return v2;
};

// Override inherited toString() to return a description of this instance
JSVector.prototype.toString = function () {
  let str =
    "x = " + this.x + " y = " + this.y + " direction = " + this.getDirection();
  str += " Magntitude = " + this.getMagnitude();
  // let str = "x = " + this.x;
  return str;
};
