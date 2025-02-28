let CreatoDisplay;
let fontSize = 90;
let fontScale = 1;
let transScale = 0;
let p1Array;
let r = 0;
let growth = true;
let shrink = false;
let speed = 1

function preload(){
  
  CreatoDisplay = loadFont('KGBlankSpaceSolid.ttf');
  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign (CENTER, CENTER);
  
  p1Array = CreatoDisplay.textToPoints("P U F F", width/2, height/2, fontSize, {
    sampleFactor: 0.7  
  });
  
}

function draw() {
  background(200, 200, 225);
  
  noStroke();
  
    fill(255, 204, 153, 45);
  circle(height/2, width/2, 550);
  
    fill(255, 204, 153, 45);
  circle(height/2, width/2, 400);
  
    fill(255, 204, 153, 45);
  circle(height/2, width/2, 300);

    fill(255, 204, 153, 45);
  circle(height/2, width/2, 200);
  
  mouseTracker ();
  changeTheScale();
      
  for (let i = 0; i < p1Array.length; i++){
    
       push();
    scale (fontScale);
    translate(p1Array[i].x - transScale, p1Array[i].y - transScale);
    rotate(r);
    r += 0.7;
    stroke (32, 64, 96);
    strokeWeight(5);
    line(-10,-10,-10,-10)
      pop();
  }
    
}

function changeTheScale() {
  
    if (fontScale <= 1){
        shrink = false;
        growth = true;
      }

    if (fontScale >= 1.3){
        growth = false;
        shrink = true;
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

function mouseTracker (){
  
     let d = dist(mouseX, mouseY, width/2, height/2); //distance of mouse from the text
  
   //Mouse Distance from Text Triggers Shake Changes
 
  if (d < height/4) {          
      speed = 6
  }
  
  else if (d < height/3) {          
      speed = 4
  }
    
  else if (d < height/2) {          
      speed = 2

  }
    
   else { 
     speed = 1
  } 
  
}
  