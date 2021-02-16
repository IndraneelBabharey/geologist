class Stone {
    constructor(x, y,) {
      var options = {
          'restitution':1,
          'friction':2,
          'density':2
          
      }
      this.body = Bodies.rectangle(x, y, 80, 80 ,options);
      this.width = 80
      this.height = 80
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      stroke("black");
      strokeWeight(4)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  