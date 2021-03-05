var bg,bgImage



function preload()  {
bgImage=loadImage("road.jpg")
}


function setup() {
createCanvas(displayWidth/2,displayHeight/2);
background("blue");
bg=createSprite(200,200,displayWidth/5,displayHeight/5);
bg.addImage(bgImage);
bg.scale=2


}

function draw() {
  background(0);  
  bg.velocityX=-3;
  if (bg.x<0){
    bg.x=bg.width/2
  }
  drawSprites();
}
