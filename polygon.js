class Polygon{
    constructor(){
        var options = {
            density:4,
            isStatic:false  
        }
        this.body = Bodies.circle(300,350,40,options)
        this.image = loadImage("polygon.png")
        World.add(world,this.body)
    }display(){
        push ()
        imageMode (CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
        pop ()
    }
}