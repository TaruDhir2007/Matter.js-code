const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world ;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
  var options = {isStatic:true}
  
  ground = Bodies.rectangle(200, 380, 700, 10, options);
  World.add(world, ground);
  var ball_options={
    restitution: 1.0
  }
  ball = Bodies.circle(200, 50, 20, ball_options);
  World.add(world, ball);
  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,700, 10 );
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}