const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // Over 9000

    ground = new Ground(9000,height,1200,20);
    platform = new Ground(9000, 305, 300, 170);

    box1 = new Box(9000,320,70,70);
    box2 = new Box(9000,320,70,70);
    pig1 = new Pig(9000, 350);
    log1 = new Log(9000,260,300, PI/2);

    box3 = new Box(9000,240,70,70);
    box4 = new Box(9000,240,70,70);
    pig3 = new Pig(9000, 220);

    log3 =  new Log(9000,180,300, PI/2);

    box5 = new Box(9000,160,70,70);
    log4 = new Log(9000,120,150, PI/7);
    log5 = new Log(9000,120,150, -PI/7);

    // The only Required stuff
    roof = new Ground(700,60,500,10)

    bird = new Bird(500,360);
    slingshot = new SlingShot(bird.body,{x:500, y:60});

    bird1 = new Bird(550,360);
    slingshot1 = new SlingShot(bird1.body,{x:550, y:60});

    bird2 = new Bird(600,360);
    slingshot2 = new SlingShot(bird2.body,{x:600, y:60});

    bird3 = new Bird(650,360);
    slingshot3 = new SlingShot(bird3.body,{x:650, y:60});

    bird4 = new Bird(700,360);
    slingshot4 = new SlingShot(bird4.body,{x:700, y:60});

    bird5 = new Bird(750,360);
    slingshot5 = new SlingShot(bird5.body,{x:750, y:60});

    bird6 = new Bird(800,360);
    slingshot6 = new SlingShot(bird6.body,{x:800, y:60});

    bird7 = new Bird(850,360);
    slingshot7 = new SlingShot(bird7.body,{x:850, y:60});

    bird8 = new Bird(900,360);
    slingshot8 = new SlingShot(bird8.body,{x:900, y:60});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    text("John's Bird Cradle",650,50)

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    roof.display()
    slingshot1.display(); 
    bird1.display();
    slingshot2.display(); 
    bird2.display();
    slingshot3.display(); 
    bird3.display();
    slingshot4.display(); 
    bird4.display();
    slingshot5.display(); 
    bird5.display();
    slingshot6.display(); 
    bird6.display();
    slingshot7.display(); 
    bird7.display();
    slingshot8.display(); 
    bird8.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

