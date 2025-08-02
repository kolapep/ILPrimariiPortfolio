//Click to change background color
//INTERACTION: Hover over text

let bgColor;
let TheSwitch;

let CreatoDisplay;
let fontSize = 130;

let p1Array;

let r; //Blue Rotation
let r2; //Red Rotatiom
let r3; //Yellow Rotation

function preload(){
  
  CreatoDisplay = loadFont('CreatoDisplay.otf');
  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign(CENTER, CENTER)
  background(0);
  
  TheSwitch = true
  
  p1Array = CreatoDisplay.textToPoints("Television", width/2, height/2, fontSize, {
    sampleFactor: 0.5 }); //CHANGE
    
}

function draw() {
      
  Swap();
  
  for (let i = 0; i < p1Array.length; i++){
    
//YELLOW TEXT  
      push();
    translate(p1Array[i].x, p1Array[i].y);
    rotate(12);
    stroke(255, 245, 195, 1);
    line(-r3,-r3,r3,r3)
    strokeWeight(1);
      pop();
// //RED TEXT
//         push(); 
//     translate(p1Array[i].x, p1Array[i].y);
//     rotate(45);
//     // r = mouseY - mouseX;
//     stroke(255, 128, 128, 50);
//     strokeWeight(1);
//     line(-r,-r,r,r)
//       pop();
//BLUE TEXT   
       push(); 
    translate(p1Array[i].x, p1Array[i].y);
    rotate(10);
    stroke(170, 240, 255, 10);
    strokeWeight(1);
    line(-r2,-r2,r2,r2)
      pop();

  }
}

function Swap (){
  
  if (TheSwitch == true) { 
      r = random(5,10)
      r2 = random (5, 10)
      r3 = random (5, 10)
   } 
  if (TheSwitch == false) { 
      r = 0
      r2 = 1
      r3 = 2
  } 

  
}

function mousePressed (){
  
  TheSwitch = !TheSwitch
  background(0); 

  
}




