class Player
{
    constructor()
    {
        this.r=70;
        this.x=50;
        this.y=height-50;
        this.vy=0;
        this.gravity=2;

    }
    jump()
    {
        if(this.y==height-this.r)
        {
            this.vy=-35;  
        }        
    }
    intersects(enemy)
     {
        if(!(this.x>enemy.x+enemy.r||this.x+this.r<enemy.x||this.y>enemy.y+enemy.r||this.y+this.r<enemy.y))
         {
          return true;
         }
         
         else 
         {
          return false;
         }
     }
    move()
    {
        this.y+=this.vy;
        this.vy+=this.gravity;
        this.y=constrain(this.y,0,height-this.r)
    }
    show()
    {
        fill(255,0,0)
        image(pImg,this.x,this.y,this.r,this.r)
    }
}