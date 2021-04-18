var people
var peoplegroup,gamestate=0
var playsound, plays
var nextslide,ns
var owlrules,or
var E,M,H


function preload(){


  people=loadImage("im.jpg") ;
  plays=loadSound("sound.mp3");
  ns=loadImage("Check.jpeg") ;
  or=loadImage("rules.png") ;
  E=loadImage("easy.png");
  M=loadImage("madium.png");
  H=loadImage("hard.png");
  
  
  
  }

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  
  peoplegroup=createSprite (displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 
  peoplegroup.addImage(people)
  peoplegroup.scale=3
  nextslide=createSprite (displayWidth/4,displayHeight/4,100,100)
 
  nextslide.addImage(ns)
  
  

  //plays.play()
}



function draw() {
  background(255,255,255);  

  if(gamestate==0){
    if(mousePressedOver(nextslide)){
      gamestate=1
    
    }
 
  }
  if(gamestate==1){
    nextslide.destroy()
    peoplegroup.destroy()
    
    //var owlrules
    owlrules=createSprite (displayWidth/2+200,displayHeight/2+200,150,200)
  owlrules.addImage(or)
  easy=createSprite(displayWidth/2+200,displayHeight/4+300,50,50)
  easy.addImage(E)
  medium=createSprite(displayWidth/2+200,displayHeight/2+200,50,50)
  medium.addImage(M)
  hard=createSprite(displayWidth/2+200,displayHeight/2+300)
  hard.addImage(H)
    if(mousePressedOver(easy)){
      //owlrules .destroy()
     // owlrules.visible=false
     
    
     gamestate=2


      //console.log("Hello")
    }
  }
  if(gamestate==2){
   owlrules.destroy()
   easy.destroy()
   medium.destroy()
   hard.destroy()
   


  }



  drawSprites();
}

