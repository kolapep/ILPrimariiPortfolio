let CreatoDisplay;
let fontSize = 150;
let fontScale = 1;
let transScale = 0;
let p1Array;
let r = 0;
let growth = true;
let shrink = false;
let speed = 1

function preload(){
  
  CreatoDisplay = loadFont('CreatoDisplay.otf');
  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign (CENTER, CENTER);
  
  p1Array = CreatoDisplay.textToPoints("Carnival", width/2, height/2, fontSize, {
    sampleFactor: 0.5
    
  });
  
}

function draw() {
  background(0);
        
  for (let i = 0; i < p1Array.length; i++){
    
       push();
    scale (fontScale);
    translate(p1Array[i].x - transScale, p1Array[i].y - transScale);
    rotate(r);
    r+= 0.002;
    stroke(255, 221, 153);
    strokeWeight(1);
    line(-10,-10,-10,-10)
      pop();
  }
    
}

