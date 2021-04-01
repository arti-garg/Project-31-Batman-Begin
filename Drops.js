class Drops {

    constructor(x,y){

        var options ={
            isStatic:false,
            friction : 0.1
        }

    this.body= Bodies.circle(x, y, 2, options);
        World.add( world, this.body)


    }

    display()
    {

    ellipseMode(RADIUS);
    fill("blue")
    ellipse(this.body.position.x, this.body.position.y, 2, 2)

    }

    update (){

        if (this.body.position.y> height ){

    Matter.Body.setPosition (this.body, { x: random(0, 600), y:random(0, 600) })
        }
    }



}
