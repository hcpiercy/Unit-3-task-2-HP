var bumsup;

function preload() {
  bumsup = loadImage('BUMSUPFINALLOGO.png');
}

function setup() {
  frameRate(20);
  createCanvas(500, 500);
  bumsup.loadPixels();
}

function draw() {
  background(255);
  image(bumsup, mouseX, mouseY,
        200+sin(frameCount*0.1)*100,
        200+cos(frameCount*0.1)*100);
}


