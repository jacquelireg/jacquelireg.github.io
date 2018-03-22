char currentkey= '1';
PImage b;

float x;
float y;
float px;
float py;
float easing = 0.05;

function setup(){
  size(1000,1000);
  background(255);
  smooth();
  frameRate(100);
  strokeWeight(20);
}

function draw() {
  if(keyPressed) {
    clear_print();
}
  if(mousePressed) {
   newkeyChoice();
  }
  float targetX = mouseX;
  x += (targetX - x) * easing;
  float targetY = mouseY;
  y += (targetY - y) * easing;
  float weight = dist(x, y, px, py);
  if(mousePressed)
  line(x, y, px, py);
  py = y;
  px = x;
  stroke(143,192,169);
}

void newkeyChoice() {
  if (key == '1' ) {
    //green
    stroke(1434,192,169);
  } else if (key == '2') {
    //yellow
    stroke(#FAF3DD);
  } else if (key == '3') {
    //lightgreen
    stroke(#C8D5B9);
  } else if (key == '4') {
    //darkgreen
    stroke(#74,124,89);
  } else if (key == '5') {
    //blue
    stroke(#104,176,171);
  } else if (key == '6') {
    //erase
    stroke(255);
  } else if (key == '7') {
    //just monika :)
  b = loadImage("monika.jpg");
  image(b, mouseX, mouseY);
  strokeWeight(0);
  }
}

void clear_print() {
    if (key == 'x') {
       background(255);
    } else if (key == 'p') {
       saveFrame("drawingprogram/drawing-####.png");
    }
}
