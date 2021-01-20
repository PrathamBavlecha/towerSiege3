class Polygon{
    constructor(){
        this.body = Bodies.circle(50,200,40,{isStatic:false})
        this.image = loadImage("polygon.png")
        World.add(world,this.body)
    }display(){
        push ()
        imageMode (RADIUS)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
        pop ()
    }
}