let img; //image
let heart;

let x = 100; //heart moving
let y = 100;
let xspeed = 2;
let yspeed = -1;

//sentences
dialoge1 = "Songs about Love";
dialoge2 = "Inanna Liaw";

let button = true; //the play button - on off switch

let songdata = [
  59, 36, 25, 39, 38, 15, 39]; //song data via sizes

function preload() {
 img = loadImage('image_2024-10-17_214727866.png') //image
 heart = loadImage('heart.png') //heart image
}

function setup() {
  createCanvas(500, 700);
  angleMode(DEGREES);
  
    blinkingcolors = [ //changes data color outline
  
  color ("white"),
  color (225,225,225,200),
    
];

}

function draw() {
  background("black");
  
  strokeWeight(3);
  
  //PLAY BUTTON
    push();
  stroke(255, 255, 255)
  fill(0,0,0);
  ellipse(width/2, 600, 100, 100);
    pop();
  //PLAY BAR
    push();
  rectMode(CENTER);
  translate(width/2, 510);
  stroke(255, 255, 255)
  fill(0,0,0);
  rect(0, 0, 400, 10, 20);
    pop();
  
     push(); 
  //SKIP BUTTON
  Skipbutton(0);
  //BACK BUTTON
  translate(500,1200);
  rotate(180);
  Skipbutton(0);
      pop(); 
  
    //THE REAL BUTTON
  
  push();
  
  if (button == true) {
    stroke(255, 255, 255)
    fill(0,0,0);
    }
  else {
    stroke(0, 0, 0)
    fill(225,225,225);
    }  
  
    //Button

  translate(200, 565);
  strokeWeight(2);
  scale(1.2);
  triangle(30, 0, 65, 30, 30, 60);
    pop();
  
  //IMAGE
    push(); 
  image(img, 50, 20, 400, 400)
    pop(); 
  
    //HEART
    push();
  if (button == true) {
    image(heart, x, y, 200, 200)
  
    // Move
  x = x + xspeed;
  y = y + yspeed;
  
  // hit right or left edge = turn
  if (x < 0 || x > width - 200) {
    xspeed = -xspeed;    
  }
  if (y < -50 || y > height - 420) {
    yspeed = -yspeed;    
  }
  }
    pop();
  
  //DATA CHART
  
    stroke(random (blinkingcolors)); //Blinking colors for data oulines
  
  push();
 translate(65,20);
  for (let j = 0; j < 7; j++){
    for (let i = 0; i < songdata.length; i++){ //fills x rows until i = data length
    
        let x = j * 60 //Rows distance from eachother
        let y = i * 60; //Rows distance from eachother
        
      if (i==0){
        fill("#092233");
        datasize = songdata[0]; //Sets data point based on size array and order: Color and size
      }
      else if (i==1){
        fill("#253d55");
        datasize = songdata[1];
      }
      else if (i==2){
        fill("#527c98");
        datasize = songdata[2];
      }
      else if (i==3){
        fill("#6faed7");
        datasize = songdata[3];
      }
      else if (i==4){
        fill("#98caeb");
        datasize = songdata[4];
      }
      else if (i==5){
        fill("#c5e0f2");
        datasize = songdata[5];
      }
      else {
         fill("white");
        datasize = songdata[6];
      }
        rect(x, y, 10, datasize);

    } 
  }
  pop();
  
  //TEXT
  
  textFont('Courier New');
  textSize(35);
  fill(225, 225, 225);
  textAlign(LEFT);
  noStroke();
  
  translate(50,375);
  text(dialoge1, 0, 50, 455, 70); //Line 1
  translate(0,35);
  text(dialoge2, 0, 50, 490, 80); //Line 2
  
}

function Skipbutton (SkipButtonRotation){ //Skip and Back buttons
  
     push();
  stroke(255, 255, 255)
  fill(0,0,0);
  //BAR
    push();
  rectMode(CENTER);
  translate(410, 600);
  rect(0, 0, 10, 100, 20);
      pop();
  //TRIANGLE
  translate(300, 550);
  strokeWeight(2);
  scale(1.7);
  triangle(30, 0, 60, 30, 30, 60);
    pop();
  
}

function mousePressed()  //trigger button deprending on distance of mouse to button

{ 
   let d = dist(mouseX, mouseY, 250, 550); //distance of mouse from button
  
   if (d < 400) //If mouse is within distance, trigger button
   { button = !button; }
}