var monika;
var natsuki;
var yurisayori;
var classroom;
var x = 0;
var speed = 5;

function preload() {
  monika = loadImage ("monika.png");
  natsuki = loadImage ("natsuki.png");
  yurisayori = loadImage ("yurisayori.png");
}

function setup() {
  createCanvas(1000,1000);
}

function draw() {
    image(monika, x, 6, monika.width / 1, monika.height / 1);
    image(natsuki, x, 126, natsuki.width / 1, natsuki.height / 1);
    image(yurisayori, x, 246, yurisayori.width / 1, yurisayori.height / 1);
    if (mouseIsPressed) {
      move();
    }
}

function move() {
  x = x + speed;
  if (x > width -150 || x < -30) {
    speed = -speed
  }
}
