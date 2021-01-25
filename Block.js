class Box extends BaseClass {
  constructor(x, y, color){
      super(x,y,30,30);
      this.color = color
      this.visibility = 255
   }
  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
        fill (this.color)
        super.display();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      pop();
    }
  }
  score(){
    if(this.visibility<=0&&this.visibility>-20){
      score = score + 1
    }
  }
  };