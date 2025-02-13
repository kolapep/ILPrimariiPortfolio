let CreatoDisplay;
let fontSize = 150;
let fontScale = 1;
let transScale = 0;
let p1Array;
let r = 0;
let growth = true;
let shrink = false;
let speed = 1

let typedText = "";
let inputBox;

function preload(){
  
  CreatoDisplay = loadFont('CreatoDisplay.otf');
  Roboto = loadFont('Roboto-Italic-VariableFont_wdth,wght.ttf');

  
}

function setup() {
  createCanvas(600, 600);
  textFont(CreatoDisplay);
  textSize(fontSize);
  textAlign (CENTER, CENTER);
  
  inputBox = createInput("");
  inputBox.position(100, height - 100);
  inputBox.size(400, 40); // Increase size of input box
  inputBox.style("font-family", "'Roboto', sans-serif"); // Change input box font
  inputBox.style("font-size", "24px"); // Increase text size in the bo
  inputBox.style("text-align", "center"); // Center text in the box
  inputBox.input(updateText);
  
}

function draw() {
  background(0);
  
    p1Array = CreatoDisplay.textToPoints(typedText, width/2, height/2, fontSize, {
    sampleFactor: 0.5
    
  });
  
  changeTheScale();
      
  for (let i = 0; i < p1Array.length; i++){
    
       push();
    scale (fontScale);
    translate(p1Array[i].x - transScale, p1Array[i].y - transScale);
    rotate(r);
    r+= 0.02;
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

function updateText() {
  typedText = inputBox.value();
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    typedText = typedText.slice(0, -1); // Remove last character if backspace is pressed
  }
}


  