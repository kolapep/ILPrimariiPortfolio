function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

}

function draw() {
  background(51, 0, 102);
  
  fill(102, 102, 102);
  ellipse(width/2, height/2, 150, 150);
   
  push()
  noStroke();
  rotate(342);
  fill(128, 128, 128);
  ellipse(120, 210, 70, 50);
  pop()
  
  push()
  stroke(0,0,0);
  strokeWeight(2)
  fill(225, 0, 0)
  rect(125, 200, 150, 10);
  pop()
  
}