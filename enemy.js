class Enemy
{
    constructor()
    {
        this.r=70;
        this.x=width;
        this.y=height-this.r;
        this.speed=random(10,15 );
    }

    move()
    {
        this.x-=this.speed;

        if(this.x+this.r<0)
        {
            score++;
            this.x=width;
        }
    }
    
    show()
    {
        image(aImg,this.x,this.y,this.r,this.r);
    }
}