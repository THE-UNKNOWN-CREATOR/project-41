class Umbrella
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.r = 155

        this.body = Bodies.circle(this.x, this.y, this.r/2, {isStatic : true})
        World.add(world, this.body);
    }

    show()
    {
        ellipseMode(CENTER);
        push();
        translate(this.body.position.x, this.body.position.y);
        //ellipse(0, 0, this.r);
        scale(0.43);
        animation(walking, -10, 135, 5, 5);
        pop();
    }
}