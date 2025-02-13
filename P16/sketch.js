//Click to change background color
//INTERACTION: Hover over text

let bgColor;

let CreatoDisplay;
let fontSize = 150;

let p1Array;

let r = 90; //Blue Rotation
let r2 = 0; //Red Rotatiom
let r3 = 45; //Yellow Rotation

function preload(){
  
  CreatoDisplay = loadFont('CreatoDisplay.otf');
  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign(CENTER, CENTER)
  background(0);
  
  p1Array = CreatoDisplay.textToPoints("carnival",   width/2, height/2, fontSize, {
    sampleFactor: 0.5 }); //CHANGE
    
}

function draw() {
      
  mouseTracker();
  
  for (let i = 0; i < p1Array.length; i++){
    
//YELLOW TEXT  
      push();
    translate(p1Array[i].x, p1Array[i].y);
    rotate(r2);
    stroke(255, 221, 153);
    line(-10,-10,10,10)
    strokeWeight(1);
      pop();
//RED TEXT
        push(); 
    translate(p1Array[i].x, p1Array[i].y);
    rotate(r3);
    stroke(255, 128, 128);
    strokeWeight(1);
    line(-10,-10,10,10)
      pop();
//BLUE TEXT   
       push(); 
    translate(p1Array[i].x, p1Array[i].y);
    rotate(r);
    stroke(128, 204, 255);
    strokeWeight(1);
    line(-10,-10,10,10)
      pop();

  }
}

function mouseTracker (){
  
  //Distance Tracking
  let d = dist(mouseX, mouseY, width/2, height/2); 
  
  //Mouse Distance from Text Triggers Speed Changes
  if (d > 120) {          
      r += 0.15;
      r2 += 0.2;
      r3+= 0.1; 
   } else { 
      r += 0.03;
      r2 += 0.04;
      r3+= 0.02; 
  }
  
}




