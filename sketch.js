// creating variables
var trex ,trex_running;
var ground;
var curvyground
var invisibleGround
// loading animations
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  curvyground=loadAnimation("ground2.png")
}

function setup(){
  // creating canvas
  createCanvas(600,200)
  
  //create a trex sprite  
 trex = createSprite(100,50,40,80)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,400,20)
 invisibleGround=createSprite(200,190,400,20)
ground.addAnimation("ground_running",curvyground)
// Making the ground Invisible
invisibleGround.visible=false
}

function draw(){
  background("white")
  // making the trex jump when it is on the ground
  if(keyDown("space") && trex.y>150)
  {
  trex.velocityY= - 10;
  }
  // making gravity
  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleGround);
  ground.velocityX=-7;
  console.log(trex.y);
  // infinite ground
  if(ground.x<0)
  {
   ground.x= ground.width/2
  }
  drawSprites()
  
}
