
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var fodGroup, obstacleGroup;
var score,ground;
var play=1,end=0,gameState=play;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400,400);
   
  
   ground1=createSprite(200,350,900,100);
   ground=createSprite(200,290,900,20);
   ground.velocityX=-4;
   ground.x=ground.width/2;
   ground.shapeColor="forestgreen";
   ground1.shapeColor="green";
  
   monkey=createSprite(80,280,20,20);
   monkey.addAnimation("moving",monkey_running);
   monkey.scale=0.1;
   
   score=0;
  
   foodGroup=new Group();
   obstacleGroup=new Group();

  
}


function draw() {
   background("lightSkyBlue");
  
   if(ground.x<0){
     ground.x=ground.width/2;
   }
  
   if(keyDown("space") && monkey.y>=249){
     monkey.velocityY=-12;
   }
  
   monkey.velocityY=monkey.velocityY+0.5;
  

  
   monkey.collide(ground);
  
   var survivalTime=0;
    stroke("white");
    textSize(20);
    fill("white");
    text("Score ;"+score,500,50);


    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    text("Survival Time :"+survivalTime,100,50);


  
   spawnBanana();
  
   spawnObstacle();
  
   drawSprites();
}

function spawnBanana(){
  if(frameCount%80===0){
    var banana=createSprite(400,Math.round(random(120,200)),20,20);
    banana.velocityX=-4;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    foodGroup.add(banana); 
    banana.lifetime=110;
    
    banana.depth=monkey.depth;
    monkey.depth=monkey.depth+1;
  }
}

function spawnObstacle(){
  if(frameCount%300===0){
  obstacle=createSprite(410,260,20,20);
  obstacle.velocityX=-4;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
  obstacleGroup.add(obstacle);
  obstacle.lifetime=110;

  }
}

