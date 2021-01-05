const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Box1=new Box(330, 235, 30, 40);
    Box2=new Box(360, 235, 30, 40);
    Box3=new Box(390, 235, 30, 40);
    Box4=new Box(420, 235, 30, 40);
    Box5=new Box(450, 235, 30, 40);
    Box6=new Box(360, 195, 30, 40);
    Box7=new Box(390, 190, 30, 40);
    Box8=new Box(420, 195, 30, 40);
    Box9=new Box(390, 155, 30, 40);
    Polygon1=new Polygon(200,200,50,50);
    rope1=new Rope(Polygon1.body,{x:200,y:50});
    ground=new Ground(600, 380, 1200, 20);
}

function draw(){
    background("white");
    Engine.update(engine);
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Box9.display();
    Polygon1.display();
    rope1.display();
    ground.display();

}

function mouseDragged(){
    Matter.Body.setPosition(Polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly();
}