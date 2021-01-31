class Boy{
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.Boy = Constraint.create(options);
        World.add(world,this.Boy);
        Boy = loadImage("images/boy.png");
    }
    
    display() {
        if(this.Boy.bodyA){
            var pointA = this.Boy.bodyA.position;
            var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}