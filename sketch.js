
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paperObj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new paper(120,50,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}



function keyPressed(){
    if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObj.body, {x:120,y:50},{x:10,y:-5} )
	}
	if(keyCode=== DOWN_ARROW){
		Matter.Body.applyForce(paperObj.body, {x:120,y:50},{x:-5,y:-10} )
	}
	
}







