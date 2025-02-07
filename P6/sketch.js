//

function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);

  
}

function draw() {                              //DRAWING
  background(255);
  
//MIDDLE
 //FISHTANK
  roundRec(0, 0, 150, 150, 4); //FISH TANK
  roundRec(0, 15, 138, 110, 3); //WATER
  roundRec(-20, -15, 60, 30, 2); //AIR BUBBLE
 //FISH
  normalRec(190, -225, 35, 35, 45); //FISH BODY
  normalRec(213, -249, 15, 15, 45); //FISH TAIL
  normalRec(210, -206, 10, 10, 45); //FISH ARM
  TheCircle(18, 30, 10, 3.5); //FISH EYE
 //TANK 
  roundRec(0, -82, 150, 10, 4); //FISH TANK BOTTOM
  roundRec(0, 82, 150, 10, 4); //FISH TANK TOP
  
//BOTTOM
 //BOTTOM BASE
  TheOval(0,220); //ERM IDK
  roundRec(0, 95, 270, 15, 7); //BUCKET LID
  TheArc(0, 105, 270, 240, 0, 6); //BUCKET
 //BOTTOM FACE 
  TheCircle(70, 140, 35, 3.5); //RIGHT EYE
  TheCircle(-70, 140, 35, 3.5); //LEFT EYE
  TheOval(0,150); //NOSE
 //SPINS
  TheTriangle(150, 560, 0.8, 90); //SPINNY RIGHT
  TheTriangle(250, 560, 0.8, 270); //SPINNY LEFT
  
//TOP
 //HEAD
  TheTriangle(260, 120, 1.7, 0); //MUSHROOM HEAD
  TheTriangle(150, 140, 2.9, 0); //TRIANGLE HEAD
  roundRec(-50, -95, 180, 15, 4); //MUSHROOM UM
 //SIDE
  normalRec(60, -112, 20, 40, 0); //MUSHROOM STEM
  roundRec(60, -140, 60, 10, 4); //MUSHROOM UM
//MINI
  normalRec(103, -202, 10, 20, 0); //MINI MUSHROOM STEM
  roundRec(105, -213, 35, 10, 5); //MUSHROOM UM
  TheArc(505, 380, 35, 40, 180, 8); //MINI TOP
//TOP FACE
    TheCircle(-35, -160, 20, 4); //RIGHT EYE
    TheCircle(-65, -160, 20, 4); //LEFT EYE
//Mushroom details i almost forgot
    TheCircle(65, -200, 18, 3); 
    TheCircle(80, -185, 15, 3);
  

  
}

                                             //FUNTIONS (6)

//COMPLEX SHAPE 1: THE ARC

function TheArc(TAposX, TAposY, TAWidth, TAHeight, TArotate, TAstokeW){
  
  push();
  translate(TAposX, TAposY)
  rotate(TArotate)
  strokeWeight(TAstokeW);
  arc(width/2, height/2, TAWidth, TAHeight, 0, 180);
  pop();

}

//COMPLEX SHAPE 2: THE TRIANGLE

function TheTriangle(TTposX, TTposY, TTscale, TTrotate) {
  
  push();
  translate(TTposX, TTposY);
  rotate(TTrotate);
  scale(TTscale);
  fill ("black");
  strokeWeight(8);
  strokeJoin(ROUND);
  triangle(-28, 17, 0, -38, 28, 17);
  pop();
  
  push();
  translate(TTposX, TTposY);
  rotate(TTrotate);
  scale (0.8 * TTscale);
  fill ("white");
  stroke("white");
  strokeWeight(8);
  strokeJoin(ROUND);
  triangle(-28, 17, 0, -38, 28, 17);
  pop();
  
}

//SIMPLE SHAPE ONE: STRAIGHT EDGE RECTANGLE

function normalRec(NRposX, NRposY, NRWidth, NRHeight, NRrotate){

  push();
  rotate(NRrotate);
  rectMode(CENTER);
  translate(NRposX, NRposY);
  fill ("black");
  rect(width/2, height/2, NRWidth, NRHeight);
  pop();
  
}

//SIMPLE SHAPE TWO: ROUND EDGE RECTANGLE

function roundRec(RRposX, RRposY, RRWidth, RRHeight, RRstokeW) {
  
  push();
  rectMode(CENTER);
  translate(RRposX, RRposY);
  fill ("white");
  strokeWeight(RRstokeW);
  rect(width/2, height/2, RRWidth, RRHeight, 20);
  pop();
  
}

//SIMPLE SHAPE THREE: THE OVAL

function TheOval(TOposX, TOposY){
  
  push();
  translate(TOposX, TOposY);
  ellipseMode(CENTER);
  strokeWeight(4);
  ellipse(width/2, height/2, 70, 45);
  pop();
  
}

//SIMPLE SHAPE FOUR: THE CIRCLE

function TheCircle(TCposX, TCposY, TCscale, TCstrokeW){
  
  push();
  translate(TCposX, TCposY);
  ellipseMode(CENTER);
  strokeWeight(TCstrokeW);
  circle(width/2, height/2, TCscale);
  pop();
  
}
