const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld;
var myengine;
var myground;
var myball;

function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;

  var options ={isStatic:true}
  var ballOptions = {isStatic:false,restitution:1.0}

  myground=Bodies.rectangle(0,385,800,20,options);
  World.add(myworld,myground);

  console.log(myground.position.x);
  console.log(myground.position.y);

  myball=Bodies.circle(200,200,50,ballOptions);
  World.add(myworld,myball);
}

function draw() {
  background("black");  
  
  fill('green');
  rect(myground.position.x,myground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(myball.position.x,myball.position.y,50,50);
  Engine.update(myengine);

  drawSprites();
}