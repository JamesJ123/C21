const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = new Ball(200, 100, 20);
  button1 = createImg("right.png");
  button1.position(220,30);
  button1.size(50, 50);
  button1.mouseClicked(hForce);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ball.show();
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
}