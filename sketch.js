var ship, edge, ship_travelling, sea, seaImg;
function preload(){

  ship_travelling = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(1050,400);
  sea = createSprite(200, 200, 1750, 2000);
  sea.addAnimation("background",seaImg);
  sea.scale = 0.5;
  ship = createSprite(950, 400, 20, 100);
  ship.addAnimation("travel",ship_travelling); 
  ship.scale = 0.3;
  preload();
}

function draw() {
  background("white");

  edge = createEdgeSprites();

  sea.velocityX = -5;

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }

 
  ship.collide(edge);
  drawSprites();
}