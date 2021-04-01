class Umbrella{

    constructor(x, y){

        var options = { 
            isStatic: true }

    this.body= Bodies.rectangle(x, y, 10, 10, options);
    this.image= loadImage("boy.png")
    World.add(world, this.body);

    }

    display(){

var pos = this.body.position;

rectMode(CENTER);
image( this.image, pos.x, pos.y, 250, 250);


    }


}