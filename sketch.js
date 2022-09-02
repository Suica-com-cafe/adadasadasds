const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruta,rope;
var fruta_com;


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(10,{x:245,y:30});
  fruta = Bodies.circle(300,300,20);
  fruta_com = new Link(rope,fruta);
  Matter.Composite.add(rope.body,fruta);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();

  Engine.update(engine);
  ellipse(fruta.position.x,fruta.position.y,30,30);
  
 
   
}
