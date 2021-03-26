
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone;
var elastic
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1000,200,30);
	mango4=new mango(1200,130,30);
	mango5=new mango(1100,200,30);
	mango6=new mango(1250,200,30);
	mango7=new mango(900,200,30);
	stone=new Rock(200,340,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	 elastic = new Elastic(stone.body,{x:235,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  elastic.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  

  groundObject.display();

  fill(0)
  textSize(20)
  text("press space to get another chance to play" ,50,50,400)
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	elastic.fly()
}

function detectcollision(stone,mango){
	mangobodypostion=mango.body.position
	stonebodypostion=stone.body.position

	var distance=dist(stonebodypostion.x,stonebodypostion.y,mangobodypostion.x,mangobodypostion.y)
	if(distance<=mango.r+stone.r){
		Matter.body.setStatic(mango.body,false)
	}
}
function keypressed(){
	if(keyCode===32){
		Matter.body.setposition(stone.body,{x:235,y:420})
		elastic.attach(stone.body)
	}
}