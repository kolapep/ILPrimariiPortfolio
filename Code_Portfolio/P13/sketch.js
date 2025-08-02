let CreatoDisplay;
let fontSize = 150;
let fontScale = 1;
let transScale = 0;
let p1Array;
let r = 0;
let growth = true;
let shrink = false;
let speed = 1
let strokeColor = (0);

function preload(){
  
  CreatoDisplay = loadFont('CreatoDisplay.otf');
  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign (CENTER, CENTER);
  background (0);
  
  p1Array = CreatoDisplay.textToPoints("Breath", width/2, height/2, fontSize, {
    sampleFactor: 0.5
    
  });
  
}

function draw() {
  
  changeTheScale();
      
  for (let i = 0; i < p1Array.length; i++){
    
       push();
    scale (fontScale);
    translate(p1Array[i].x - transScale, p1Array[i].y - transScale);
    rotate(r);
    r++
    stroke(strokeColor);
    strokeWeight(1);
    line(-10,-10,-10,-10)
      pop();
  }
    
}

function changeTheScale() {
  
    if (fontScale <= 1){
        shrink = false;
        growth = true;
        strokeColor = 225

      }

    if (fontScale >= 1.3){
        growth = false;
        shrink = true;
        strokeColor = 0
      }

    if (growth) {
      fontScale += 0.002 * speed; // Grow
      transScale += 0.5 * speed; // Adjust Translation
    }

    if (shrink){
      fontScale -= 0.001 * speed; // Shrink
      transScale -= 0.25 * speed; // Adjust Translation
    }   
        
}

  