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
  
  // mouseTracker ();
  // changeTheScale();
      
  for (let i = 0; i < p1Array.length; i++){
    
       push();
    scale (fontScale);
    translate(p1Array[i].x - transScale, p1Array[i].y - transScale);
    rotate(r);
    r+= 0.09;
    stroke (200,200,225);
    strokeWeight(1);
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
    console.log ("L1");
  }
  
  else if (d < height/3) {          
      speed = 4
    console.log ("L1");
  }
    
  else if (d < height/2) {          
      speed = 2
    console.log ("L2");

  }
    
   else { 
     speed = 1
  } 
  
}
  