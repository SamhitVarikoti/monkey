
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}


function draw() {
  background(225);
  
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime :"+ survivalTime,100,50);
  
  if(ground.x < 0){
      ground.x = ground.width/2;
     }
  if(keyDown("space")){
      monkey.velocityY = -12;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  Food();
  obsticals();
  
  drawSprites();
}
function Food(){
  if(frameCount % 80 === 0){
     var banana = createSprite(300,150,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -3;
     lifetime = 150;
     }
}
function obsticals(){
   if(frameCount % 300 === 0){
     var rock = createSprite(300,300,40,10);
     rock.addImage(rockImage);
     rock.scale = 0.3;
     rock.velocityX = -3;
     lifetime = 150;
   }
}





