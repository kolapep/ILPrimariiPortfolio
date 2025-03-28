
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
  image(video, 0, 0, 1280, 1000);
    pop();
  
   // DRAW INSTRUCTIONS
  textAlign(RIGHT, CENTER);
  fill(textColor);
  textSize(fontSize2);
  text("Commands:", width - 35, height / 8);
  textSize(fontSize3);
  text("No Zoom", width - 35, height / 7 + fontSize2);
  text("Face", width - 35, height / 7 + fontSize2 * 2);
  text("Eyes", width - 35, height / 7 + fontSize2* 3);
  text("Right", width - 35, height / 7 + fontSize2* 4);
  text("Left", width - 35, height / 7 + fontSize2* 5);
  
  // SWITCH LABEL
  let baseText = "...";
  if (label == "No Zoom") {
    baseText = "Zoom Out";
  } else if (label == "Face") {
    baseText = "Zoom In";
  } else if (label == "Eyes") {
    baseText = "Eyes";
  } else if (label == "Right") {
    baseText = "Right";
  } else if (label == "Left") {
    baseText = "Left";
}
  
   // DRAW LABEL
  fill(textColor);
  textAlign(CENTER, CENTER);
  textSize(fontSize1);
  text(baseText, width / 2, height - 60);
  
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