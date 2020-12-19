const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

var canvas, Drop = [], engine, world, umbrella, walking, lightning, iCantThinkOfANameForThisVariableSoIMadeItThisLong;

function preload(){
    walking = loadAnimation("images/Walking Frame/walking_1.png",
                            "images/Walking Frame/walking_2.png", 
                            "images/Walking Frame/walking_3.png", 
                            "images/Walking Frame/walking_4.png", 
                            "images/Walking Frame/walking_5.png",
                            "images/Walking Frame/walking_6.png",
                            "images/Walking Frame/walking_7.png",
                            "images/Walking Frame/walking_8.png");
    lightning = loadAnimation("images/thunderbolt/1.png", 
                              "images/thunderbolt/2.png", 
                              "images/thunderbolt/3.png",
                              "images/thunderbolt/4.png");
}

function setup(){
   canvas = createCanvas(300, 500);
   engine = Engine.create();
   world = engine.world;
   umbrella = new Umbrella(width/2, 250);
   newDrop();
   iCantThinkOfANameForThisVariableSoIMadeItThisLong = 0;
}

function newDrop()
{
    Drop.push(new drop(random(10, width-10), random(-10, -25)));
}

function draw(){
    background(0, 0, 0);
    
    iCantThinkOfANameForThisVariableSoIMadeItThisLong++;

    if(iCantThinkOfANameForThisVariableSoIMadeItThisLong > 40){
        push();
        imageMode(CENTER);
        scale(0.3);
        animation(lightning, 550, 50, 50, 50);
        pop();
    }

    if(iCantThinkOfANameForThisVariableSoIMadeItThisLong > 50)
    {
        iCantThinkOfANameForThisVariableSoIMadeItThisLong -= iCantThinkOfANameForThisVariableSoIMadeItThisLong;
    }

    if(frameCount % 1 === 0)
    {
        newDrop();
    }
    for(var i = Drop.length-1; i > 0; i--)
    {
        Drop[i].show();

        if(Drop[i].update())
        {
            Drop.splice(i, 1);
        }
    }
    umbrella.show();

    Engine.update(engine);
}