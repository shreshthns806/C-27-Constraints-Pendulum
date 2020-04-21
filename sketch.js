
//NameSpacing Matter.js functions
    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;


//Creating variables related to Matter.js
    var engine, world;


//Creating variables related to animation
    var roof, bob;


function setup(){

    //Create canvas of 1200 width and 400 height
        createCanvas(400,500);


    //Creating engine and world
        engine = Engine.create();
        world = engine.world;
    
    
    //Giving options for roof
        var roof_options={
            isStatic:true
        }    
    
    
    //creating roof body
        roof=Bodies.rectangle(200,50,400,10,roof_options);
        World.add(world,roof);
    
    
    //giving options for bob
        var bob_options={
            restituition:1.0,
            density:1.5
        }
    
    
    //creating bob body
        bob=Bodies.circle(200,150,20,bob_options);
        World.add(world,bob);
    
    
    //giving options for constraints
        var options={
            bodyA:bob,
            bodyB:roof,
            stiffness:0.004,
            length:200
        }
    
    
    //constraining bob and roof
            var chain=Matter.Constraint.create(options);
            World.add(world,chain);
    }


function draw(){ 
    //BlackBackground
        background(0);
    
    
    //Updating Engine
        Engine.update(engine);


    rectMode(CENTER);
    
    fill("blue");
    
    //Text
        textSize(20)
        text("Press Space to Set your pendulum",40,300)
        textSize(19)
        text("Press any other key to release your pendulum",0,350)
        text("Press Enter to restart your pendulum",40,400)

    //Drawing the bodies
        rect(roof.position.x,roof.position.y,400,20);
        fill("white")
        ellipse(bob.position.x,bob.position.y,50);
    
    
    //Drawing the string of Pendulum
        stroke("green");
        strokeWeight(3);
        line(bob.position.x,bob.position.y,roof.position.x,roof.position.y);
    
    
    noStroke();
    
    
    //Letting the user set the mouse X and mouse Y when key 32 is pressed; i.e-Space
        if(keyCode===32){
                bob.position.y = mouseY;
            bob.position.x = mouseX;
        }
    
    //Reset bob position    
    if(keyCode===ENTER){
        bob.position.x=200
        bob.position.y=200
    }
}