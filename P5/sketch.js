//INSTRUCTIONS: LEFT CLICK THE EYE

let button = true; //the eye button - on off switch

let extcolor = 0; //transparency of external time dots (No to Yes)
let eyelid = 500 //Transparency of eyelid (Closed to Open)

//Internal Time Variables: Dot Sizes
let size12 = 30;
let size1 = 30;
let size2 = 30;
let size3 = 30;
let size4 = 30;
let size5 = 30;
let size6 = 30;
let size7 = 30;
let size8 = 30;
let size9 = 30;
let size10 = 30;
let size11 = 30;

let timer = 0; //Timer based on seconds for random closed timing

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
}

function draw() {
  background(10,10,10);
  
  let s = second(); //Seconds variable
// console.log(`current: ${s}`) 

 noStroke();
                                        //THE EYE BUTTON
//EYE:White Base
push();
  rectMode(CENTER);
  translate(300, -125)
  rotate (45);
  fill ("white");
  rect(width/2, height/2, 100, 100);
pop();
  
//EYE:Black Center  
push();
  rectMode(CENTER);
  translate(300, -125)
  rotate (45);
  fill ("black");
  rect(width/2, height/2, 80, 80);
pop();
 
//EYE:White pupal  
push();  
  rectMode(CENTER);
  fill ("white");
  rect(width/2, height/2, 10, 40);
  
//EYE:White Lash
  rectMode(CENTER); 
  translate(0, 70)
  fill ("white");
  rect(width/2, height/2, 10, 20);
pop();

//EYE: Black Lid
push(); 
  rectMode(CENTER);
  translate(300, -140)
  rotate (45);
  fill (10,10,10,eyelid);
  rect(width/2, height/2, 100, 100);
pop();

                                       //External Time
ellipseMode(CENTER);
fill(225,225,225,extcolor); 
  
//12 
  push();
  translate (0,-250);
  ellipse(width/2, height/2, 50, 50);
  pop();

//1
  push();
  translate (125,-200);
  ellipse(width/2, height/2, 40, 40);
  pop();
  
//2
push();
  translate (210,-110);
  ellipse(width/2, height/2, 40, 40);
pop();
  
//3 
push();
  translate (250,0);
  ellipse(width/2, height/2, 50, 50);
pop();
  
//4
push();
  translate (125,200);
  ellipse(width/2, height/2, 40, 40);
pop();
  
//5
push();
  translate (210,110);
  ellipse(width/2, height/2, 40, 40);
pop();
  
//6
push();
  translate (0,250);
  ellipse(width/2, height/2, 50, 50);
pop();
  
//7
push();
  translate (-125,200);
  ellipse(width/2, height/2, 40, 40);
pop();
  
//8
push();
  translate (-210,110);
  ellipse(width/2, height/2, 40, 40);
pop();
  
//9 
push();
  translate (-250,0);
  ellipse(width/2, height/2, 50, 50);
pop();
  
//10
push();
  translate (-125,-200);
  ellipse(width/2, height/2, 40, 40);
pop();
  
//11
push();
  translate (-210,-110);
  ellipse(width/2, height/2, 40, 40);
pop();
  
                                           //Internal Time
fill(0,225,225); 
  
 //12 
push();
  translate (0,-150);
  ellipse(width/2, height/2, size12, size12);
pop();

//1
push();
  translate (70,-120);
  ellipse(width/2, height/2, size1, size1);
pop();
  
//2
push();
  translate (120,-70);
  ellipse(width/2, height/2, size2, size2);
pop();
  
//3 
push();
  translate (150,0);
  ellipse(width/2, height/2, size3, size3);
pop();
  
//4
push();
  translate (120,70);
  ellipse(width/2, height/2, size4, size4);
pop();
  
//5
push();
  translate (70,120);
  ellipse(width/2, height/2, size5, size5);
pop();
  
//6
push();
  translate (0,150);
  ellipse(width/2, height/2, size6, size6);
pop();
  
//7
push();
  translate (-70,120);
  ellipse(width/2, height/2, size7, size7);
pop();
  
//8
push();
  translate (-120,70);
  ellipse(width/2, height/2, size8, size8);
pop();
  
//9 
push();
  translate (-150,0);
  ellipse(width/2, height/2, size9, size9);
pop();
  
//10
push();
  translate (-120,-70);
  ellipse(width/2, height/2, size10, size10);
pop();
  
//11
push();
  translate (-70,-120);
  ellipse(width/2, height/2, size11, size11);
pop();
  
                                        //Eye Button Bools 
  if (button == true) 
    { 
      extcolor = 500 //Button changes external time color to white
      eyelid = 0        //Button changes lid to full opacity (CLOSED)
    } 
  
  if (button == false) 
    { 
      extcolor = 0 //Button changes external time color to grey
      eyelid = 500         //Button changes lid to no opacity (OPEN)
    }
                                  //Internal Time Clock: EYE OPEN
  
  if (button == true) //Changes size of specific var dependent on seconds
  {
  //Change size of 12
    if (s >= 0 && s <= 5) 
      {size12 = 50}
    else
      {size12 = 20}

  //Change size of 1
      if (s >= 5 && s <= 10) 
      {size1 = 50}
    else
      {size1 = 20}

  //Change size of 2
    if (s >= 10 && s <= 15) 
      {size2 = 50}
    else
      {size2 = 20}

  //Change size of 3
    if (s >= 15 && s <= 20) 
      {size3 = 50}
    else
      {size3 = 20}

  //Change size of 4
    if (s >= 20 && s <= 25) 
      {size4 = 50}
    else
      {size4 = 20}

  //Change size of 5
    if (s >= 25 && s <= 30) 
      {size5 = 50}
    else
      {size5 = 20}

  //Change size of 6
    if (s >= 30 && s <= 35) 
      {size6 = 50}
    else
      {size6 = 20}

  //Change size of 7
    if (s >= 35 && s <= 40) 
      {size7 = 50}
    else
      {size7 = 20}

  //Change size of 8
    if (s >= 40 && s <= 45) 
      {size8 = 50}
    else
      {size8 = 20}

  //Change size of 9
    if (s >= 45 && s <= 50) 
      {size9 = 50}
    else
      {size9 = 20}

  //Change size of 10
    if (s >= 50 && s <= 55) 
      {size10 = 50}
    else
      {size10 = 20}

  //Change size of 11
    if (s >= 55 && s <= 60) 
      {size11 = 50}
    else
      {size11 = 20}
  }
                           //Internal Time Clock: EYE CLOSED
  
    if (button == false) 
  {
    if (second() >= 1+timer) //Every Timer tick Randomizes Size of Inttime vars
    {
      size12 = random([20], [80]);
      size1 = random([10], [70]);
      size2 = random([10], [70]);
      size3 = random([20], [80]);
      size4 = random([10], [70]);
      size5 = random([10], [70]);
      size6 = random([20], [80]);
      size7 = random([10], [70]);
      size8 = random([10], [70]);
      size9 = random([20], [80]);
      size10 = random([10], [70]);
      size11 = random([10], [70]);
    }
  }
  
  timer = second(); //Timer based on seconds
  
}

function mousePressed()  //Code for detecting distance of mouse to button refrenced from re71

{ 
   let d = dist(mouseX, mouseY, width / 2, height / 2); //distance of mouse from button
  
   if (d < 50) //If mouse is within distance, trigger button
   { button = !button; }
}