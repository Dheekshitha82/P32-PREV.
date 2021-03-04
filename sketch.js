
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject, paper, 	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	paper = new Paper(300, 200, 50, 50)
  box1 = new Box(900,100,70,70)
  box2 = new Box(900,100,70,70)
  box3 = new Box(900,100,70,70)
  box4 = new Box(900,100,70,70)
  box5 = new Box(900,100,70,70)
  box6 = new Box(900,100,70,70)
  box7 = new Box(800,100,70,70)
  box8 = new Box(800,100,70,70)
  box9 = new Box(800,100,70,70)
  box10 = new Box(800,100,70,70)
  box11 = new Box(800,100,70,70)
  box12 = new Box(800,100,70,70)
  box13 = new Box(700,100,70,70)
  box14 = new Box(700,100,70,70)
  box15 = new Box(700,100,70,70)
  box16 = new Box(700,100,70,70)
  box17 = new Box(700,100,70,70)
  box18 = new Box(700,100,70,70)
  box19 = new Box(750,-100,70,70)
  box20 = new Box(850,-100,70,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
//   if(keyDown("RIGHT_ARROW")){
// 	Matter.Body.setPosition(paper.body, {x: 1200, y: 200})
//   }
 

  groundObject.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();


}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:160, y:-185})
}
}

