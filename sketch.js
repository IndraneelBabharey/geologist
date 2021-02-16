
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,height,800,20)
	hammer = new Hammer(810,160,70,PI/4);
	rubber = new Rubber(400,50)
	stone = new Stone(700,320,PI/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  
  ground.display();
  hammer.display();
  rubber.display();
  stone.display()
 
}



