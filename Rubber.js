class Rubber{
    constructor(x,y){
var options = {
     isStatic : false,
    restitution : 0.3,
    friction : 5,
    density : 1
   
}

  this.body = Bodies.circle(x, y, 20, options);
  this.radius = 20
  

  World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        
        stroke("orange")
strokeWeight(4)

fill("red")
       
        
        circle(this.image,0,0,this.radius*2,this.radius*2)
        pop();
      }
    }
    
