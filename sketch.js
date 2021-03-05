var movingRect, fixedRect

function setup() {
 
  createCanvas(800,400);

  movingRect = createSprite(600,200,80,30)
  movingRect.shapeColor = "green"
   
  fixedRect = createSprite(200,200,50,80)
  fixedRect.shapeColor = "green"

}

function draw() {

 background(0,0,0); 

 movingRect.y = mouseY
 movingRect.x = mouseX

 if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2  &&
  movingRect.y - fixedRect.y < movingRect.height/2 +fixedRect/height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 +fixedRect/height/2
  ) 

 {
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "red"

 }
 
 else{
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

 }

  drawSprites();
}