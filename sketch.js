'use strict';

var shapes = [];
var minRadius = 5;
var maxRadius = 250;
var density = 2;
var strokeColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeColor = color(0, 10);
}

function draw() {
  background(255);
  stroke(strokeColor);

  shapes.forEach(function(shape) {
    shape.draw();
  });
}

function Shape(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  Shape.prototype.draw = function() {
    for (var i = 0; i < this.r; i += density) {
      rect(this.x, this.y, i, this.r);
    }
  };
}

function mouseDragged() {
  shapes.push(new Shape(mouseX, mouseY, random(minRadius, maxRadius)));
}

function keyPressed() {
if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}
