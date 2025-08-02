let sceneNum = 8; //Game Scenes


let SubmitbuttonBool = true; //Bool for submission
let Countdownstart = 6000; //Difficulty level for submission (high # = lower difficulty)
let SubmissionInteraction = 0; //Submission Button interaction count

let artstage = []; //Art minigame Stages
let artindex = 0;

let musiccue = [];
let musicSceneCount = 0;

let song;


function setup() {
  song = loadSound('Ghost Fight - Toby Fox.mp3');
  createCanvas(600, 400);
  Countpass = millis(); //Countdown by miliseconds


}

function preload() {
  
//Main Scene Images & Endings
  
 BackgroundImageTest = loadImage('deskscenebase.png'); //DELETE LATER
  
 IntroScreen = loadImage('diffmode.png'); //Intro: Choose Difficulty 
  
 BackgroundImageA = loadImage('deskscene.png'); //Main Background
 BackgroundImageB = loadImage('deskscenelaptop.png'); //Laptop Background
 BackgroundImageC = loadImage('desksceneartmusic.png'); //Music Background

 //ADD: WINDOW SCENE BACKGROUND
 
 WinGameArt = loadImage('wingameart.png'); //Win Game Endings
MusicWin = loadImage('musicwin.png');
 //ADD: Win Game (cooking) 
 //ADD: Win Game (dating) 
 LoseGame = loadImage('LoseGame.jpg'); //Lose Game Ending

//Main Overlay
  
 SubmitionButton = loadImage('nonactivesubmitbutton.png'); //Submit Button
 OButtonSubmit = loadImage('nonactivesubmitbutton.png'); 
 XButtonSubmit = loadImage('activesubmitbutton.png'); 
  
 Warning = loadImage('nonactivewarningbutton.png'); //Warning pop up
 Warning1 = loadImage('nonactivewarningbutton.png'); 
 Warning2 = loadImage('activewarningbutton.png'); 
  
//Buttons and Popups
  
 BoredButton = loadImage('boredbutton.png'); //Laptop Buttons
 ArtPathButton = loadImage('artbutton.png');
 CookPathButton = loadImage('cookbutton.png');
 DatePathButton = loadImage('datebutton.png');
 MusicPathButton = loadImage('musicbutton.png');
  
 //ADD: WINDOW ASSETS
  
//Mini Game Assets:
 artstage[0] = loadImage(' Theartimage1.png'); //Art Game Assets
 artstage[1] = loadImage(' Theartimage2.png'); 
 artstage[2] = loadImage(' Theartimage3.png'); 
 artstage[3] = loadImage(' Theartimage4.png'); 
 artstage[4] = loadImage(' Theartimage5.png'); 
  
 musiccue[1] = loadImage(' musiccue1.png'); //Music Game Assets
 musiccue[2] = loadImage(' musiccue2.png'); 
  
 musicnote1 = loadSound(' sol-101774.mp3'); 
 musicnote2 = loadSound('re-78500.mp3'); 

}

function draw() {
  background(220);
  console.log(SubmissionInteraction);
  
  switch (sceneNum) {
    case 0:
      scene0();
    break;
    
    case 1:
      scene1();
    break;
    
    case 2:
      scene2();
    break;
    
    case 3:
     scene3();
    break;
    
    case 4:
      scene4();
    break;
    
    case 5:
      scene5();
    break;
    
    case 6:
     scene6();
    break;

    case 7:
     scene7();
    break;
    
    case 8:
     scene8();
    break;
    }  
}


function scene8(){
  image(IntroScreen, 0, 0, 600, 400); //Intro
  
      if (sceneNum === 8){ //Stall Countdown on intro scene
   SubmitbuttonBool = false;
    
  }

   let easyd = dist(mouseX, mouseY, 300, 100); //Easy Mode Button
    if (mouseIsPressed && easyd < 40){
      Countdownstart = 9000;
      sceneNum = 0; 
   }
  
    let medd = dist(mouseX, mouseY, 300, 180); //Hard Mode Button
     if (mouseIsPressed && medd < 40){
      Countdownstart = 5000;
      sceneNum = 0; 
   }
  
    let hardd = dist(mouseX, mouseY, 300, 250); //Good Luck Mode Button
     if (mouseIsPressed && hardd < 40){
      Countdownstart = 2000;
      sceneNum = 0; 
   }
  
} //Intro: Choose Difficulty

function scene0(){
  
  image(BackgroundImageA, 0, 0, 600, 400); //Background
  // image(BackgroundImagetest, 0, 0, 600, 400); //DELETE LATER
  
  SubmitButton();
  SubmitBar();
  WarningSwitch();
  
} //Gameplay: Starting Scene

function scene2(){
  image(BackgroundImageB, 0, 50, 600, 400); //Background
  
  LaptopButtons();
  
  SubmitButton();
  SubmitBar();
  WarningSwitch();
  
} //Gameplay: Choose your path on laptop

function scene4(){

  image(BackgroundImageA, 0, 0, 600, 400); //Background 
  
  ArtGame();
  
  SubmitButton();
  SubmitBar();
  WarningSwitch();
  
} //Gameplay: Art 

function scene5(){
  image(BackgroundImageC, 0, 0, 600, 400); //Background 
  
  SubmitButton();
  SubmitBar();
  WarningSwitch();

if (musicSceneCount >= 1){  //I know this can be done much easier but I am lazy whoops
  image(musiccue[1], 40, 60, 100, 100); //Music Stages
}
  
if (musicSceneCount >= 2){
  image(musiccue[1], 90, 60, 100, 100); 
}
if (musicSceneCount >= 3){
  image(musiccue[2], 150, 55, 100, 100); 
}
  if (musicSceneCount >= 4){
  image(musiccue[2], 240, 55, 100, 100);}
  
  if (musicSceneCount >= 5){
  image(musiccue[1], 320, 60, 100, 100);  
  }
    if (musicSceneCount >= 6){
  image(musiccue[2], 390, 55, 100, 100); 
    }
      if (musicSceneCount >= 7){
  image(musiccue[1], 470, 60, 100, 100); 
      }
  
if (musicSceneCount == 8){
sceneNum = 3      }

} //Gameplay: Music 

function scene6(){
  image(CookPathButton, 275, 58, 160, 160); //Button

} //Gameplay: Cooking 

function scene7(){
  image(DatePathButton, 275, 125, 160, 160); //Button

} //Gameplay: Dating 

function scene3(){
  
  if(musicSceneCount >= 8){
  image(MusicWin, 0, 0, 600, 400);} //Art Win 
  else{
  image(WinGameArt, 0, 0, 600, 400);} //Art Win

  //(Code: Choose from Array based on type of win)
} //Win Game Ending

function scene1(){
  image(LoseGame, 0, 0, 600, 400); //Lose Game Image

} //Lose Game Ending

function SubmitButton(){
  
  image(SubmitionButton, 200, -35, 150, 150); //Submission button Image
    
  if (SubmitbuttonBool == true) { //Submission Button
    SubmitionButton = OButtonSubmit
  }else{
    SubmitionButton = XButtonSubmit //Changes Image
    Countpass = millis(); //Resets Submission Bar Countdown
  }
  
  let submitd = dist(mouseX, mouseY, 280, 50); //Distance detection for Submit button
  
   if (mouseIsPressed && submitd < 40){ //Submit Bool Trigger
      SubmitbuttonBool = false; 
   }else{
     SubmitbuttonBool = true;
   }
  
  if (SubmissionInteraction >= 3 && sceneNum == 0){
    BoredNextScene()
  }
  
} //Submission Button

function SubmitBar(){
  
    push(); //Visuals for Bar
  rectMode(CENTER); //Outer Bar Visual
  fill (250,250,250,150);
  strokeWeight(3.5);
  rect(450, 45, 290, 45, 20);
  
  scale(0.8); //Inner Bar Visual
  rect(563, 56, 350, 45, 20);
    pop();
  
    push(); 
  stroke(255, 0, 0);
  strokeWeight(25);
	
  countdown = map(millis(), Countpass + Countdownstart, Countpass, 325 , 575); //Countdown map
  line(325, 45, countdown, 45); //Visual Output: Bar
   pop();
  
  if (countdown <= 325){ //Ends game when countdown ends
    sceneNum = 1; //End Scene
  }
  
} //Submission Bar

function WarningSwitch(){
    
  if (countdown < 400) { //If player is close to end on countdown...
    
    image(Warning, 200, 40, 150, 150); //Warning Message

    if (second() % 2 == 0){ // Switch Image based on odd/even seconds
      Warning = Warning1;
    }else{
      Warning = Warning2;
    } 
  }
} //Submission Warning pop up

function BoredNextScene(){
  
  image(BoredButton, 200, 260, 200, 200); //Bored Button Image

  let boredd = dist(mouseX, mouseY, 280, 350); //Distance detection for Submit button
  
   if (mouseIsPressed && boredd < 40){ //Trigger Scene Change
      sceneNum = 2; 
   }
  
} //Activate Laptop button

function LaptopButtons(){
  
  image(BackgroundImageB, 0, 50, 600, 400); //Background
  
  image(ArtPathButton, 175, 58, 160, 160); //Art Button
     let artd = dist(mouseX, mouseY, 255, 122); 
     if (mouseIsPressed && artd < 35){ 
      sceneNum = 4; 
     }
  
  image(MusicPathButton, 175, 125, 160, 160); //Button
  
     let Musicd = dist(mouseX, mouseY, 255, 222); 
     if (mouseIsPressed && Musicd < 35){ 
      sceneNum = 5; 
     }
  
//   image(CookPathButton, 275, 58, 160, 160); //Button
//      let cookd = dist(mouseX, mouseY, 355, 122); 
//      if (mouseIsPressed && cookd < 30){ 
//       sceneNum = 6; 
//      }
  
//   image(DatePathButton, 275, 125, 160, 160); //Button
  
//       let Dated = dist(mouseX, mouseY, 355, 222); 
//      if (mouseIsPressed && Dated < 30){ 
//       sceneNum = 7; 
//      }
  
} //Laptop Buttons (Choose Path)

function ArtGame(){
  
   push();
  rectMode(CENTER); //Text Instructions Background
  fill (225,225,225,150);
  noStroke();
  rect(310, 375, 350, 45, 10);
    pop();
  
   push(); //Text Instructions
  textSize(32)
  text("[Press Space To Draw]", 150, 385)
   pop();
  
  image(artstage[artindex], 40, -60, 500, 500); //Art Stages
} //Art Minigame

function keyPressed() { 
  
  if (sceneNum == 4 && keyCode == '32') { //Art Minigame
  artindex++;  
    if (artindex == artstage.length){
    sceneNum = 3;
    } 
  }
  
   else if (keyCode == '77'){
      if (song.isPlaying()) {
        song.stop();
      } else {
        song.play();
    }
  }
  
  else if (sceneNum == 5){
    musicSceneCount += 1;
    if (musicSceneCount == 2 || 5){
    musicnote1.play();}
    else{
     musicnote2.play(); 
    }

  }
  
}

function mousePressed(){
  
  let intcheckd = dist(mouseX, mouseY, 280, 50); //Submit button interaction count
  
  if (sceneNum == 0 && intcheckd < 40){
      SubmissionInteraction++; //Adds to interaction count
  }
  
}


  




