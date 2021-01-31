class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        Mango = loadImage("images/mango.png");
      }
    display(){

      }
    };