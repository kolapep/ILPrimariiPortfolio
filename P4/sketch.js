//INSTRUCTIONS: HOLD SPACE TO SLOW FRAME RATE

function setup() {
  createCanvas(400, 400);
  
  colorArray = [ //Color Array of pink shades  
    color (255, 102, 153), //pink
    color (255, 77, 77), // red
    color (255, 153, 187), //light light pink  
  ];
  
}

function draw() {
  background("black"); //BG color doesnt matter

  
  if (keyIsDown (32)){ //Press space, slow frame rate
  frameRate(1);
  }
  else{
  frameRate(30);
  }
    
  
  cSize = (random(8,10)) //Changes the size of white objects (group)

  
  for (let i=0; i<51; i++){
    for (let j = 0; j < 51; j++){
      
      if ((i+j)%2 == 0){
        
       //Circle that randomly changes in size
        push();
        fill (random (colorArray)); //Chooses random color from array
        circle(j*8, i*8, random(13,15)); //Changes the size of red objects (individual)
        pop()
        
        fill (51, 51, 255); //Blue color
        circle(j*8, i*8, cSize);
        
        fill ("white")
        
      }else{
        fill (250,250,250); //Fills alternate squares black
      }
      rect (j*8, i*8, 7.6);
      }
    }
  
}