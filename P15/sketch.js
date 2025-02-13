let CreatoDisplay;
let fontSize = 150;
let fontScale = 1;
let transScale = 0;
let p1Array;
let r = 0;
let growth = true;
let shrink = false;
let changeScale = false;

function preload(){
  
  CreatoDisplay = loadFont('CreatoDisplay.otf');
  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign (CENTER, CENTER);
  
  p1Array = CreatoDisplay.textToPoints("Breath", width/2, height/2, fontSize, {
    sampleFactor: 0.5
    
  });
  
}

function draw() {
  background(0);
  
  changeTheScale();
      
  for (let i = 0; i < p1Array.length; i++){
    
       push();
    scale (fontScale);
    translate(p1Array[i].x - transScale, p1Array[i].y - transScale);
    rotate(r);
    r++
    stroke (200,200,225);
    strokeWeight(2);
    line(-10,-10,-10,-10)
      pop();
  }
    
}

function changeTheScale() {
  
  if (changeScale){
    if (fontScale <= 1){
        shrink = false;
        growth = true;
      }

    if (fontScale >= 1.3){
        growth = false;
        shrink = true;
      }

    if (growth) {
      fontScale += 0.002; // Grow
      transScale += 0.5; // Adjust Translation
    }

    if (shrink){
      fontScale -= 0.001; // Shrink
      transScale -= 0.25; // Adjust Translation
    }
  }   
        
}

function keyPressed() {
  if (key == ' ') { // Check if spacebar is pressed
    changeScale = true;
  }
}

function keyReleased() {
  if (key == ' ') { // Stop growing when space is released
    changeScale = false;
  }
}
  