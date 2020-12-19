class drop
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.r = 6;

        this.options = {
            friction:0.1
        }
        this.body = Bodies.circle(this.x, this.y, this.r/2, this.options);
        World.add(world, this.body);
    }

    show()
    {
        ellipseMode(CENTER);
        push();
        fill(0, 0, 255);
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0, this.r, this.r, {mass : 7});
        pop();
    }

    update()
    {
        if(this.body.position.y > height+50)
        {
            return true
        }
        else 
        return false
    }
}