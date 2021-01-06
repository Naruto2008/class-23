const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var g1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2=new Box(260,360,50,50);
    box3=new Box(320,50,50,50);
    box4=new Box(380,150,50,50);
g1=new Ground(200,height,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
g1.display();
}