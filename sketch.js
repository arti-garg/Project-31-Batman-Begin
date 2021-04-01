const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrops=[];
var maxDrops = 100;

var boy;
var t1, t2 ;
var th1, th2;
var fc=0;


function preload(){
t1= loadImage("thunder1.png");
t2= loadImage("thunder2.png");
    
}

function setup(){
    var canvas = createCanvas (600, 600)
    
    engine = Engine.create();
    world = engine.world;
boy = new Umbrella(150, 380) ;
}

function draw(){
    
    background(0)
Engine.update(engine);

if(frameCount%5===0){
    raindrops.push(new Drops(random(0, 600),0));
    
  }


for (var i =0; i< raindrops.length; i++){

    raindrops[i].display();
}
boy.display();

var rand= Math.round(random(1,2))
if (frameCount %100 === 0){
fc =frameCount
th1= createSprite (random (1, 300), random (20, 40));
switch(rand){
    case 1: th1.addImage(t1);
    break;
    case 2: th1.addImage(t2);
    break; 
    default: break;
}
//th1.addImage(t1)
th1.scale =0.3
}
if (fc +10 === frameCount && th1){
    th1.destroy();
}



drawSprites();
}   

