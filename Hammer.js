class Hammer{
    constructor(x,y,height,angle){
        var options ={
            restitution: 0.5,
            friction :1.0,
            density : 2

        }

        this.body = Bodies.rectangle(x,y,20,height,options)
        this.width = 20
        this.height = height
        Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }

    display(){
        var P = this.body.position
        var A = this.body.angle
        P.x = mouseX
        P.y = mouseY
        push()
        translate(P.x,P.y)
        rotate(A)
        rectMode(CENTER)
        stroke("green")
        strokeWeight(4)
        fill(255)
        rect(0,0,this.width,this.height)
        pop()
    }
}