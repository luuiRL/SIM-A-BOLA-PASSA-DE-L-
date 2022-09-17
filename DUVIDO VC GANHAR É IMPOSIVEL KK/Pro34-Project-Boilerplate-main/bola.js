class Ball {
    constructor(x, y) {

     var options = {
        restitution: 0.5,
        density:0.3,
        friction:1.0,
     };


    this.body = Bodies.circle(x, y, 10, options);
    this.image = loadImage("poke.png.png");
    World.add(world, this.body);

    this.color = color;
    }

       display() {

    var pos = this.body.position;

    ellipseMode(RADIUS);
    fill('cyan');
    ellipse(pos.x, pos.y, 10 ,10);

       }

}