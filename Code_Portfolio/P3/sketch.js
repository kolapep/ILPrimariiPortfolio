let img; //image

//sentences
dialoge1 = "Songs about Love";
dialoge2 = "Inanna Liaw";

let songdata = [
  59, 36, 25, 39, 38, 15, 39]; //song data via sizes

function preload() {
 img = loadImage('image_2024-10-17_214727866.png') //image
}

function setup() {
  createCanvas(500, 700);
  angleMode(DEGREES);
  
    blinkingcolors = [ //changes data color outline
  
  color ("white"),
  color (225,225,225,200),
    
];

}

function draw() {
  background("black");
  
  strokeWeight(3);
  
  //PLAY BUTTON
    push();
  stroke(255, 255, 255)
  fill(0,0,0);
  ellipse(width/2, 600, 100, 100);
    pop();
  //PLAY BAR
    push();
  rectMode(CENTER);
  translate(width/2, 510);
  stroke(255, 255, 255)
  fill(0,0,0);
  rect(0, 0, 400, 10, 20);
    pop();
  
     push(); 
  //SKIP BUTTON
  Skipbutton(0);
  //BACK BUTTON
  translate(500,1200);
  rotate(180);
  Skipbutton(0);
      pop(); 
  
  push();
  
    //Button

  translate(200, 565);
  strokeWeight(2);
  scale(1.2);
  triangle(30, 0, 65, 30, 30, 60);
    pop();
  
  //IMAGE
    push(); 
  image(img, 50, 20, 400, 400)
    pop(); 
  
  
  //DATA CHART
  
    stroke(random (blinkingcolors)); //Blinking colors for data oulines
  
  push();
 translate(65,20);
  for (let j = 0; j < 7; j++){
    for (let i = 0; i < songdata.length; i++){ //fills x rows until i = data length
    
        let x = j * 60 //Rows distance from eachother
        let y = i * 60; //Rows distance from eachother
        
      if (i==0){
        fill("#092233");
        datasize = songdata[0]; //Sets data point based on size array and order: Color and size
      }
      else if (i==1){
        fill("#253d55");
        datasize = songdata[1];
      }
      else if (i==2){
        fill("#527c98");
        datasize = songdata[2];
      }
      else if (i==3){
        fill("#6faed7");
        datasize = songdata[3];
      }
      else if (i==4){
        fill("#98caeb");
        datasize = songdata[4];
      }
      else if (i==5){
        fill("#c5e0f2");
        datasize = songdata[5];
      }
      else {
         fill("white");
        datasize = songdata[6];
      }
        rect(x, y, 10, datasize);

    } 
  }
  pop();
  
  //TEXT
  
  textFont('Courier New');
  noLoop();
  textSize(35);
  fill(225, 225, 225);
  textAlign(LEFT);
  noStroke();
  
  typeWriter(dialoge1, 0, 50, 455, 70, 300); //Line 1
  
  typeWriter(dialoge2, 0, 50, 490, 80, 3000); //Line 2
  
  setTimeout(redraw, 6000); //Redraws the line

}

function Skipbutton (SkipButtonRotation){ //Skip and Back buttons
  
     push();
  stroke(255, 255, 255)
  fill(0,0,0);
  //BAR
    push();
  rectMode(CENTER);
  translate(410, 600);
  rect(0, 0, 10, 100, 20);
      pop();
  //TRIANGLE
  translate(300, 550);
  strokeWeight(2);
  scale(1.7);
  triangle(30, 0, 60, 30, 30, 60);
    pop();
  
}

function typeWriter(sentence, n, x, y, speed, delay) {  //Refrenced from cjstanleywinter
  setTimeout(function() {
    if (n < (sentence.length)) { //If dialoge length hasent reached amount of letters typed
      text(sentence.substring(n, n + 1), x + n * 20, y); //types text
      n++; //increases count for amount of letters typed
        setTimeout(function() { 
          typeWriter(sentence, n, x, y, speed, 0) //Sets delay to 0
        }, speed); } }, delay); 
  
}
