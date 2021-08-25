var ship, shipAnimation, edges;
var seaImage, sea;

function preload(){
  shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  //Creating Sea
  sea = createSprite(200,200);
  sea.addImage("sea",seaImage);
  sea.velocityX = -2;
  sea.scale = 0.3;

  //Creating Ship
  ship = createSprite(90,210);
  ship.addAnimation("ship",shipAnimation);
  ship.scale = 0.2;

  //Creating Edges
  edges = createEdgeSprites();
}

function draw() {
  background("white");

  //If statement to make sea look infinite
  if(sea.x<-200){
    sea.x=sea.width/2
  }

  drawSprites();
}