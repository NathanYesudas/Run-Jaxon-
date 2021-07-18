
var pathImg
var runner
var runnerImg
var leftside
var rightside
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg  = loadAnimation("Runner-1.png","Runner-2.png")


}

function setup(){
createCanvas(400,400);

//create sprites here
path = createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 4
path.scale = 1.2

//Runner
runner = createSprite(10,350,50,50)
runner.addAnimation("runner",runnerImg)
runner.scale = 0.08

//invisible boundries
rightside = createSprite(400,400,0,400)
rightside.visible = false
leftside = createSprite(0,400,0,400)
leftside.visible = false
}

function draw() {
background(0);
drawSprites()
createEdgeSprites();
if(path.y>400){
  path.y = height/4
}

runner.x = World.mouseX;
runner.collide(rightside)
runner.collide(leftside)

}
