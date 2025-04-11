
//CODE

// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/EkSTHgoF3/';

let classifier;
let label = "listening";

let fontSize1 = 30; //Voice Command
let fontSize2 = 22; //Instructions
let fontSize3 = 20;
let fontSize4 = 32; //UI
let fontSize5 = 18; //UI
let textColor = "white";
let ZoomNumber = 0;
let ZoomScale = 1;

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL+ 'model.json');
  
  CreatoDisplay = loadFont('CreatoDisplay-Regular.otf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  captureVideo();
  classifyAudio();
  
  button = createButton('Color Mode');
  button.position(width - 110, 78);
  button.mousePressed(SwitchColors);
  
}

function classifyAudio() {
  // Start classifying - the sound model will continuously listen to the microphone
  classifier.classify(gotResults);
}

function captureVideo() {
   // Create the video
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(0);
  
   // DRAW VIDEO (Flip Horizonally)
    push();
  translate(width,0);
  scale(-1, 1);
  // image(video, -width/2, -width/2, 2640, 2000);
  image(video, ZoomNumber, ZoomNumber, 1320 * ZoomScale, 1000 * ZoomScale);
    pop();
  
   // DRAW INSTRUCTIONS
  textAlign(RIGHT, CENTER);
  fill(textColor);
  textSize(fontSize2);
  text("Commands:", width - 35, height / 8);
  textSize(fontSize3);
  text("No Zoom", width - 35, height / 7 + fontSize2);
  text("Face", width - 35, height / 7 + fontSize2 * 2);
 
  
  // SWITCH LABEL
  let baseText = "...";
  if (label == "No Zoom") {
    baseText = "Zoom Out";
    ZoomScale = 1;
    ZoomNumber = 0;
  } else if (label == "Face") {
    baseText = "Zoom In";
    ZoomScale = 2;
    ZoomNumber = -width/4;
  }
  
  push();
   // DRAW LABEL
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(fontSize1);
  text(baseText, width / 2, height - 60);
  pop();
  
  //Draw UI
    push();
  fill("white");
  textAlign(LEFT, CENTER);
  rect(0, 0, width, 100);
  fill("black");
      push();
  stroke(0);
  strokeWeight(1);
  textSize(fontSize4);
  text("Cosmetic", 20, 40);
  text("Cooperation", 20, 40 + fontSize4);
    pop();
  textSize(fontSize5);
  text("Camera assists the user with their makeup by zooming into different parts of their face via voical command.", 220, 30);
    text("Designed using Teachable Machine sound detection and face tracking.", 220, 55);
    text("Project by Inanna Liaw.", 220, 80);
    pop();

}

function SwitchColors() {
  if (textColor == "black"){
    textColor = "white"

  }
  else if (textColor == "white"){
    textColor = "black"
  }
}

// The model recognizing a sound will trigger this event
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}