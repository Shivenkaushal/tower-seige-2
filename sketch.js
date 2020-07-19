

const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var ground;
var hit =5;
var bird;
var world, engine;
var mConstraint;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,log1;

var dotImg;
var boxImg;
var bkgImg;

function preload() {
  dotImg = loadImage('images/dot.png');
  boxImg = loadImage('images/equals.png');
  bkgImg = loadImage('images/skyBackground.png');
}

function setup() {
  var canvas = createCanvas(1511, 400);
  engine = Engine.create();
  world = engine.world;
  
 
  bird = new Bird(270, 250, 25);
  log1= new Ground(1020,300,200,10);
  ground= new Ground(350,400,2400,10);
  box1 = new box(950,200,40,40);
  box2= new box(1000,200,40,40);
  box3 = new box(1050,200,40,40);
  box4 = new box(1100,200,40,40);
  box5 = new box(1080,100,40,40);
  box6 = new box(1020,100,40,40);
  box7 = new box(970,100,40,40);
  box8 = new box(1050,50,40,40);
  box9 = new box(1000,50,40,40);
  box10 = new box(1030,10,40,40);
 
  slingshot = new SlingShot({x:270,y:250,},bird.body );

  var mouse = Mouse.create(canvas.elt);
  var options = {
    mouse: mouse
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}


function draw() {
  background(bkgImg);
  Matter.Engine.update(engine);

  log1.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display(); 
  box7.display();
  box8.display(); 
  box9.display(); 
  box10.display();
 ground.display();
  slingshot.display();
  bird.display();


  textSize(30)
text (hit,100,100)
}


function keyPressed() {
  if (keyCode === 32 && hit >= 1) {
    World.remove(world,bird.body)
    bird = new Bird(270, 250, 25);
    slingshot.attach(bird.body);
    hit = hit-1
  }
  if (keyCode === LEFT_ARROW) {
    World.remove(world,box1.body)
    World.remove(world,box2.body)
    World.remove(world,box3.body)
    World.remove(world,box4.body)
    World.remove(world,box5.body)
    World.remove(world,box6.body)
    World.remove(world,box7.body)
    World.remove(world,box8.body)
    World.remove(world,box9.body)
    World.remove(world,box10.body)
    box1 = new box(950,200,40,40);
    box2= new box(1000,200,40,40);
    box3 = new box(1050,200,40,40);
    box4 = new box(1100,200,40,40);
    box5 = new box(1080,100,40,40);
    box6 = new box(1020,100,40,40);
    box7 = new box(970,100,40,40);
    box8 = new box(1050,50,40,40);
    box9 = new box(1000,50,40,40);
    box10 = new box(1030,10,40,40);
   hit = 5
  }
}
function mouseReleased(){
setTimeout(()=>{
  
  slingshot.fly()
},100)
}