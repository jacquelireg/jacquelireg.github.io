let monika;
let x = -225;
let speed = 5;


function preload() {
  monika = loadImage('monika.jpg')
}

function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(200);
  image(monika, x, 10, monika.width / 2, monika.height / 2);
  move();
}

function move() {
  x = x + speed;
  if (x >= width || x< -225) {
    speed = -speed
  }
}
