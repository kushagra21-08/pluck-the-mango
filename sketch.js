
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;



function setup() {
	createCanvas(3000, 900);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,25);
	mango1 = new Mango(1290,160,30);
	mango2 = new Mango(1355,210,30);
	mango3 = new Mango(1230,290,30);
	mango4 = new Mango(1420,300,30);
	mango5 = new Mango(1485,210,30);
  tree = new Tree(1350,680);
  ground = new Ground(0,680,4000,20);
	boy = new Boy(250,580);
	chain = new Chain(stone.body,{x:159, y:488});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background("gray")
  fill(82, 80, 80);
  textSize(24);
  text("press space for second chance !",177,95);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
