function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(45, 50, 30,);
  
  //Background details
  
  push();
  translate(width/2, height/2,);
  rotate(45);
  noStroke();
  fill(0, 0, 0, 20);
  ellipse(0, 0, 800, 500);
  pop();

   push();
  translate(width/2, height/2,);
  noStroke();
  fill(0, 0, 0, 20);
  ellipse(0, 0, 900, 500);
  pop();
  
  push();
  translate(width/2, height/2,);
  noStroke();
  fill(10, 0, 10, 30);
  ellipse(0, 0, 1000, 300);
  pop();
  
  //Shadow
  
  push();
  translate(300,-80);
  rotate(45);
  noStroke();
  fill(20, 25, 15, 100);
  ellipse(width/2, height/2, 450, 450);
  pop();
  
  // Blue base
  
  push();
  translate(300,-100);
  rotate(45);
  stroke(0, 0, 50)
  strokeWeight(5)
  fill(0,255,255, 200);
  ellipse(width/2, height/2, 450, 450);
  pop();
  
   push();
  translate(310,-110);
  rotate(45);
  noStroke();
  fill(0,255,255, 200);
  ellipse(width/2, height/2, 420, 420);
  pop();
  
  push();
  translate(320,-130);
  rotate(45);
  noStroke();
  fill(225,225,225,180);
  ellipse(width/2, height/2, 340, 340);
  pop();
  
  push();
  translate(0,75);
  noStroke();
  fill(225,225,225,180);
  ellipse(width/2, height/2, 300, 340);
  pop();
  
  //layer 2 - black ears
  
  push();
  translate(350,-190);
  rotate(45);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 80, 80);
  pop();
  
    push();
  translate(260,-190);
  rotate(45);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 80, 80);
  pop();
  
  //layer 2 - peach
  
  push();
  translate(290,230);
  scale(2);
  //figured out how to do this out of sheer laziness and hope
  fill(255, 217, 179);
  noStroke();
  triangle(-20, 25, 8, -30, 36, 25);
  pop();
  
  push();
  translate(350,-170);
  rotate(45);
  noStroke();
  fill(255, 217, 179);
  ellipse(width/2, height/2, 50, 50);
  pop();
  
  push();
  translate(260,-170);
  rotate(45);
  noStroke();
  fill(255, 217, 179);
  ellipse(width/2, height/2, 50, 50);
  pop();
  
  //neck and nose
  
  push();
  translate(5,-140);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 20, 20);
  pop();
  
  push();
  translate(5,-30);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 50, 50);
  pop();
  
  //arms
  
    push();
  translate(-200,280);
  rotate(315);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 30, 100);
  pop();
  
  push();
  translate(380,-150);
  rotate(45);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 30, 100);
  pop();
  
     push();
  translate(-210,320);
  rotate(315);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 30, 100);
  pop();
  
  push();
  translate(390,-100);
  rotate(45);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 30, 100);
  pop();
  
  push();
  translate(100,50);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 100, 30);
  pop();
  
  push();
  translate(-100,50);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 100, 30);
  pop();
  
  //hands
  
    push();
  translate(110,-60);
   stroke(0,0,0);
  strokeWeight(2)
  fill(225,225,225);
  ellipse(width/2, height/2, 70, 60);
  pop();
  
  push();
  translate(-110,-60);
   stroke(0,0,0);
  strokeWeight(2)
  fill(225,225,225);
  ellipse(width/2, height/2, 70, 60);
  pop();
  
      push();
  translate(130,-20);
   stroke(0,0,0);
  strokeWeight(2)
  fill(225,225,225);
  ellipse(width/2, height/2, 70, 60);
  pop();
  
  push();
  translate(-130,-20);
   stroke(0,0,0);
  strokeWeight(2)
  fill(225,225,225);
  ellipse(width/2, height/2, 70, 60);
  pop();
  
      push();
  translate(130,60);
   stroke(0,0,0);
  strokeWeight(2)
  fill(225,225,225);
  ellipse(width/2, height/2, 70, 60);
  pop();
  
        push();
  translate(-130,60);
   stroke(0,0,0);
  strokeWeight(2)
  fill(225,225,225);
  ellipse(width/2, height/2, 70, 60);
  pop();
  
//   //Red
  
  push();
  translate(5,40);
  noStroke();
  fill(180,0,0);
  ellipse(width/2, height/2, 150, 150);
  pop();
  
    push();
  translate(350,-30);
  rotate(45);
  noStroke();
  fill(180,0,0);
  ellipse(width/2, height/2, 80, 80);
  pop();
  
  push();
  translate(260,-30);
  rotate(45);
  noStroke();
  fill(180,0,0);
  ellipse(width/2, height/2, 80, 80);
  pop();
  
//   //black legs
  
  push();
  translate(-50,420);
  rotate(315);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 50, 100);
  pop();
  
  push();
  translate(240,-10);
  rotate(45);
  noStroke();
  fill(0,0,0);
  ellipse(width/2, height/2, 50, 100);
  pop();
  
  //this is the realization that order matters
  
  //yellow and shading
  
  push();
  translate(100,140);
  noStroke();
  fill(255, 219, 77);
  ellipse(width/2, height/2, 110, 90);
  pop();
  
  push();
  translate(100,150);
  noStroke();
  fill(255, 195, 77);
  ellipse(width/2, height/2, 110, 90);
  pop();
  
  push();
  translate(-100,140);
  noStroke();
  fill(255, 219, 77);
  ellipse(width/2, height/2, 110, 90);
  pop();

  push();
  translate(-100,150);
  noStroke();
  fill(255, 195, 77);
  ellipse(width/2, height/2, 110, 90);
  pop();
  
  //Shine
  push();
  translate(750, 10);
  rotate(110);
  noStroke();
  fill(225,225,225,180);
  ellipse(width/2, height/2, 70, 110);
  pop();
}

