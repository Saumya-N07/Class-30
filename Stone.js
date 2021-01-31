class Stone{
    constructor(bodyA,pointB) {
    var options = {
        bodyA: bodyA, 
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    this.pointB=pointB;
    this.Stone = Constraint.create(options);
    World.add(world,this.Stone);
    Stone = loadImage("images/rock.png");
}
fly(){
    this.Stone.bodyA=null;
}
display() {
    if(this.Stone.bodyA){
        var pointA = this.Stone.bodyA.position;
        var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}