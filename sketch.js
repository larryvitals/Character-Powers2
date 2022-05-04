var
cat=100;
hat=50;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  r = random(255);
  g = random(255);
  b = random(255);
}

//The draw function happens over and over again
function draw() {
  background(r,g,b); //an RGB color for the canvas' background
  //circle
 
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(cat,100,100,100); // center of canvas, 20px dia
  cat=cat+1
  quad(5,5,5,5,5,5,5,5);

  stroke(123,250,137);
  strokeWeight(3);
  fill(cat,106,87);
  rect(300,200,100,600);
 }

function mousePressed() {
   // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
}