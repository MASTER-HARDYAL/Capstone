class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
          length:300
        }
        this.rope=bodyA
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
    var pointB=this.pointB
    var pointA=this.rope.bodyA.position
    strokeWeight(5)
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    }
}