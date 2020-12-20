
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, dustbinObj1, dustbinObj2, dustbinObj3,dustbinimage;
var ground1;

function preload()
{
  dustbinimage = loadImage("sprites/dustbingreen.png")
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

paper1 = new Paper(160,640,40,10,);
ground1 = new Ground(400,670,800,20);
dustbinObj3 = new Dustbin(640,655,80,10);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  paper1.display();
  ground1.display();
  dustbinObj3.display();
  imageMode(CENTER);
  image(dustbinimage, 640, 595, 240, 150);
  

  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:210,y:-210});
  
  }
}

