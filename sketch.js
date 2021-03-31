
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,treeImage,boy,boyImage;

function preload()
{
	 //treeImage = loadImage("tree.png");
	 boyImage = loadImage("boy.png"); 

}

function setup() {
	createCanvas(800,600);

	//tree = createSprite(1000,450);
//	tree.addImage(treeImage);
	//tree.scale = 0.1;

	//boy = createSprite(200,450);
	//boy.addImage(boyImage);
	//boy.scale = 0.1;


	engine = Engine.create();
	world = engine.world;
  
	mango1 = new Mango(580,380,25);
	mango2 = new Mango(690,360,30);
	mango3 = new Mango(730,280,23);
	mango4 = new Mango(750,330,21);
	mango5 = new Mango(720,350,26);
	stone = new Stone(200,450,40);
	ground = new Ground(400,550,800,10)
	slingshot = new Slingshot(stone.body,{x:225,y:480});
	tree = new Tree(680,400,300,400);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(225);
  image(boyImage,200,440,150,150);
  ground.display();
  tree.display();
  
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
stone.display();
slingshot.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);


  
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	slingshot.fly();
}

function keyPressed()
{
	if (keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:225,y:450});
		slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango)
{
	 mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position 
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y) 
	if(distance<=lmango.r+lstone.r)
	{
		 Matter.Body.setStatic(lmango.body,false) 
	}
 }



