class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          isStatic: false
      }
      this.body = Bodies.circle(x, y, radius, options);
      World.add(world, this.body);
      this.image=loadImage("Sprites/paper.png");
      this.radius = radius;
    }
    display(){
      var paperpos=this.body.position;
      imageMode(CENTER);
      image(this.image, paperpos.x,paperpos.y, this.radius*2,this.radius*2);      
    }
  }
  