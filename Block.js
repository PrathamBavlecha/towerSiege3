class Box extends BaseClass {
    constructor(x, y, color){
      super(x,y,30,30);
      this.color = color
    }
    display(){
      push ()
      fill (this.color)
      super.display()
      pop ()
    }
  };