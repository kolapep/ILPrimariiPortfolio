let CreatoDisplay;
let fontSize = 110;
let p1Array;
let r = 0;
let r2 = 0;
let r3 = 0;

function preload(){
  
  CreatoDisplay = loadFont('CreatoDisplay.otf');
  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign(CENTER, CENTER)
  
  p1Array = CreatoDisplay.textToPoints("Television", width/2, height/2, fontSize, {
    sampleFactor: 0.3
    
  });
    
}

function draw() {
  background(0);
    
  // text("test", width/2, height/2);
  
  mouseTracker();
  
  for (let i = 0; i < p1Array.length; i++){
    
// BLUE
      push();
    translate(p1Array[i].x, p1Array[i].y);
    rotate(18);
    stroke(25, 128, 255)
    line(-r,-r,r,r)
    strokeWeight(3);
      pop();   
 // RED   
       push(); 
    translate(p1Array[i].x, p1Array[i].y);
    rotate(18);
    stroke(255, 128, 128)
    strokeWeight(2);
    line(-r2,-r2,r2,r2)
      pop();      
// WHITE
      push(); 
    translate(p1Array[i].x, p1Array[i].y);
    rotate(18);
    stroke(225)
    strokeWeight(1);
    line(-r3,-r3,r3,r3)
      pop();
  } 
}

function mouseTracker (){
  
     let d = dist(mouseX, mouseY, width/2, height/2); //distance of mouse from the text
  
   //Mouse Distance from Text Triggers Shake Changes
  if (d > 120) {          
      r = random(4,20);
      r2 = random (2, 15);
      r3 = random (10, 10);
   } else { 
      r = 10;
      r2 = 7;
      r3 = 5;
  } 
}




