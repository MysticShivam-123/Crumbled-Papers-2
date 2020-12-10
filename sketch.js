
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin= loadImage("dustbingreen.png");
	paper = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground= new Ground(400,650,800,30);
	dustbin1 = new Dustbin(600,620,200,20);
	dustbin2 = new Dustbin(500,560,20,100)
	dustbin3 = new Dustbin(700,560,20,100)
	paperball1 = new Paper(100,620,30)
  
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:85,y:-85})
}
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperball1.display();
 image(dustbin,480,435,250,200)
 image(paper,30,460,150)
}



