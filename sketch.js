var spaceShip, spaceShipImg;
var obstacle, obstacleImg, obstacleImg2, obstaclesGroup;
var space, spaceImg;
var gameOver;
var play = 1;
var end = 0;
var gameState;

function preload(){
spaceShipImg = loadImage("spaceship.png");
obstacleImg = loadImage("asteroidImg1.png");
spaceImg = loadImage("spaceBackground.jpg");
spaceShip = loadImage("spaceship.png");
gameOver = loadImage("gameOver.jpg");
}

function setup() {
 createCanvas(700, 700);
 space = createSprite(700, 400, 100, 250);
 space.addImage("background", spaceImg);
 space.scale=2;

 spaceShip = createSprite(400, 600, 20, 20);
 spaceShip.addImage("ship", spaceShipImg);
 spaceShip.scale=0.25;

gameOver = createSprite(400, 400, 20, 20);
gameOver.visible = false;



}

function draw() {
   if(gameState === play){     

        obstacle = createSprite(Math.round(random, 300,600), 700, 20, 20)
        obstacle.velocityY = 4
                
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
                  break;
          case 2: obstacle.addImage(obstacle2);
                  break;
                  default: break;
          
                  spaceShip.y = World.Mouse.y;
        
        }
   if(gameState === end){
          gameOver.visible = true;
          
        }   
        if(mousePressedOver()){
              gameOver.destroy();  
        }
}
        drawSprites();
   }


