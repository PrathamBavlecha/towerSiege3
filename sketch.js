const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,595,1200,10)

    stand1 = new Ground(200,400,250,10)
    stand2 = new Ground(600,200,250,10)

    block7 = new Box(110,370,"blue")
    block1 = new Box(140,370,"blue")
    block2 = new Box(170,370,"blue")
    block3 = new Box(200,370,"blue")
    block4 = new Box(230,370,"blue")
    block5 = new Box(260,370,"blue")
    block6 = new Box(290,370,"blue")
    //layer 2
    block8 = new Box(140,340,"red")
    block9 = new Box(170,340,"red")
    block10 = new Box(200,340,"red")
    block11 = new Box(230,340,"red")                   
    block12 = new Box(260,340,"red")
    //layer3
    block13 = new Box(170,310,"lightgreen")
    block14 = new Box(200,310,"lightgreen")
    block15 = new Box(230,310,"lightgreen")
    //layer4
    block16 = new Box(200,280,"yellow")


    //part 2 layer 1 
    blocka7 = new Box(510,170,"blue")
    blocka1 = new Box(540,170,"blue")
    blocka2 = new Box(570,170,"blue")
    blocka3 = new Box(600,170,"blue")
    blocka4 = new Box(630,170,"blue")
    blocka5 = new Box(660,170,"blue")
    blocka6 = new Box(690,170,"blue")
    //layer 2
    blocka8 = new Box(540,140,"red")
    blocka9 = new Box(570,140,"red")
    blocka10 = new Box(600,140,"red")
    blocka11 = new Box(630,140,"red")                   
    blocka12 = new Box(660,140,"red")
    //layer3
    blocka13 = new Box(570,110,"lightgreen")
    blocka14 = new Box(600,110,"lightgreen")
    blocka15 = new Box(630,110,"lightgreen")
    //layer4
    blocka16 = new Box(600,80,"yellow")

   polygon = new Polygon()
   slingshot = new SlingShot(polygon.body,{x:200,y:50})

}
function draw(){
    background("lightblue")
    Engine.update(engine);

    ground.display()

    stand1.display()
    stand2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()

    blocka1.display()
    blocka2.display()
    blocka3.display()
    blocka4.display()
    blocka5.display()
    blocka6.display()
    blocka7.display()
    blocka8.display()
    blocka9.display()
    blocka10.display()
    blocka11.display()
    blocka12.display()
    blocka13.display()
    blocka14.display()
    blocka15.display()
    blocka16.display()

    polygon.display()
    slingshot.display()
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}