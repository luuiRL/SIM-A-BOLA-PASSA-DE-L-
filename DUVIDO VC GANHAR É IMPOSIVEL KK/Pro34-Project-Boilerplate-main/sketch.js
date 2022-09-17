
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var piso;
var Parede1, Parede2, Parede3;
var teto, teto2, teto3;

var chão;

var bola;

var restartButton, restartImg, restart;


function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  chão = new Wall(400, 390, 10, 800, "green");

  parede1 = new Wall(794, 85, 130, 10, "orange");
  parede2 = new Wall(750, 155,10, 150, "orange");
  parede3 = new Wall(680, 85, 130, 10, "orange");

  teto = new Wall(400, -2, 10, 800, "green");
  teto2 = new Wall(3, 200, 800, 10, "green");
  teto3 = new Wall(801,200,800,10, "green");

  restartImg = loadImage("R.png");

  bola = new Ball(200,50);  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  chão.display();

  parede1.display();
  parede2.display();
  parede3.display();
  bola.display();
  teto.display();


}

function keyPressed() {
  if(keyCode == UP_ARROW) {
    Matter.Body.applyForce(bola.body, bola.body.position, {x:0, y:-5});
  }

  if(keyCode == RIGHT_ARROW) {
    Matter.Body.applyForce(bola.body, bola.body.position, {x:2, y:0});
  }
  if(keyCode == LEFT_ARROW) {
    Matter.Body.applyForce(bola.body, bola.body.position, {x:-2, y:0});
  }
}