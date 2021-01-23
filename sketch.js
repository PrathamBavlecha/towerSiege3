const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,695,1200,10)

    stand1 = new Ground(800,600,250,10)
    stand2 = new Ground(1000,400,250,10)

    block7 = new Box(710,570,"blue")
    block1 = new Box(740,570,"blue")
    block2 = new Box(770,570,"blue")
    block3 = new Box(800,570,"blue")
    block4 = new Box(830,570,"blue")
    block5 = new Box(860,570,"blue")
    block6 = new Box(890,570,"blue")
    //layer 2
    block8 = new Box(740,540,"red")
    block9 = new Box(770,540,"red")
    block10 = new Box(800,540,"red")
    block11 = new Box(830,540,"red")                   
    block12 = new Box(860,540,"red")
    //layer3
    block13 = new Box(770,510,"lightgreen")
    block14 = new Box(800,510,"lightgreen")
    block15 = new Box(830,510,"lightgreen")
    //layer4
    block16 = new Box(800,480,"yellow")


    //part 2 layer 1 
    blocka7 = new Box(910,370,"blue")
    blocka1 = new Box(940,370,"blue")
    blocka2 = new Box(970,370,"blue")
    blocka3 = new Box(1000,370,"blue")
    blocka4 = new Box(1030,370,"blue")
    blocka5 = new Box(1060,370,"blue")
    blocka6 = new Box(1090,370,"blue")
    //layer 2
    blocka8 = new Box(940,340,"red")
    blocka9 = new Box(970,340,"red")
    blocka10 = new Box(1000,340,"red")
    blocka11 = new Box(1030,340,"red")                   
    blocka12 = new Box(1060,340,"red")
    //layer3
    blocka13 = new Box(970,310,"lightgreen")
    blocka14 = new Box(1000,310,"lightgreen")
    blocka15 = new Box(1030,310,"lightgreen")
    //layer4
    blocka16 = new Box(1000,280,"yellow")

   polygon = new Polygon()
   slingshot = new SlingShot(polygon.body,{x:300,y:350})

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
function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(polygon.body)
        Matter.Body.setPosition(polygon.body,{x:300,y:350})
    }
}