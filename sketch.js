var spr1,spr2,spr3,spr4;





function setup() {
  createCanvas(800,400);
spr1= createSprite(400, 200, 50, 50);
spr1.shapeColor=("blue");

spr2= createSprite(500,200,50,50);
spr2.shapeColor=("green");

spr3=  createSprite(600,200,50,50);
spr3.shapeColor=("purple");

spr4=  createSprite(700,200,50,50);
spr4.shapeColor=("blue");

spr5= createSprite(400, 100, 50, 50);
spr5.shapeColor=("green");

spr6= createSprite(500,100,50,50);
spr6.shapeColor=("blue");

spr7=  createSprite(600,100,50,50);
spr7.shapeColor=("purple");

spr8=  createSprite(700,100,50,50);
spr8.shapeColor=("green");
}

function draw() {
  background(255,255,255); 
  
  spr1.velocityY=+7;
  spr2.velocityY=+5;
  spr3.velocityY=+4;
  spr4.velocityY=+6;
  spr5.velocityY=+7;
  spr6.velocityY=+5;
  spr7.velocityY=+4;
  spr8.velocityY=+6;
  
  drawSprites();
}